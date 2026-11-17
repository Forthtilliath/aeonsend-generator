<#
.SYNOPSIS
  Récupère l'illustration de chaque Némésis sur les wikis Aeon's End.

.DESCRIPTION
  Télécharge le recto du plateau Némésis (image principale de sa page sur
  aeonsend.wiki.gg, sinon sur aeonsend.fandom.com), garde le haut
  du plateau (l'illustration, sans le texte), le réduit et l'enregistre en JPEG
  dans src/assets/nemeses/<slug du nom français>.jpg. L'appli le trouve par ce
  slug (src/data/artwork.ts) : une Némésis sans fichier s'affiche sans image.
  À relancer seulement pour ajouter une Némésis (les fichiers existants sont
  gardés, sauf avec -Force).

.EXAMPLE
  .\scripts\nemesis-art.ps1
  .\scripts\nemesis-art.ps1 -Force
#>
param([switch]$Force)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

# Nom dans l'appli => titre de la page sur le wiki anglais.
$Nemeses = [ordered]@{
	'Rage Incarnée'                     = 'Rageborne'
	'Masque Tordu'                      = 'Crooked Mask'
	'Prince des Gloutons'               = 'Prince of Gluttons'
	"Titan de l'Ombre"                  = 'Umbra Titan'
	'Reine Carapace'                    = 'Carapace Queen'
	'Seigneur de la Désolation'         = 'Blight Lord'
	'Haze Queen'                        = 'Haze Queen'
	'The Darkness'                      = 'The Darkness'
	'Doom Vortex'                       = 'Doom Vortex'
	'The Wailing'                       = 'The Wailing'
	'Couronne Creuse'                   = 'Hollow Crown'
	'Maggoth'                           = 'Maggoth'
	'Marchand de pierres'               = 'Stonemonger'
	'Mutation infestée'                 = 'Infested Mutation'
	'Erythiza dévorée'                  = 'Erythiza, Consumed'
	'Héraut de la fin'                  = 'Herald of the End'
	'Nid des changelins'                = 'The Changeling Nest'
	'Cœur de la corruption'             = "Corruption's Core"
	'Déclin sans fin'                   = 'The Endless Decay'
	'Hypnotiseur embrumé'               = 'Clouded Mesmer'
	'Spectre absorbant'                 = 'Absorbing Wraith'
	'Reliquaire'                        = 'The Reliquary'
	"Terreur d'airain"                  = 'The Terror in Brass'
	'Oracle de la fange'                = 'Oracle of Filth'
	'Prophète deux fois mort'           = 'Twice-Dead Prophet'
	'Reflet égaré'                      = 'Wayward Reflection'
	'Masque Tordu (Beyond the Breach)'  = 'Crooked Mask (Beyond the Breach)'
	'Sans-Âge'                          = 'The Timeless'
	'Vin le Saccageur'                  = 'Rampaging Vin'
}

# wiki.gg d'abord : plus complet que fandom pour les boîtes récentes.
$Apis = 'https://aeonsend.wiki.gg/api.php', 'https://aeonsend.fandom.com/api.php'
$UserAgent = 'aeonsend-generator-build/1.0'
$OutDir = Join-Path $PSScriptRoot '..\src\assets\nemeses'
# Part haute du plateau occupée par l'illustration, et largeur finale.
$ArtRatio = 0.4
$Width = 960
$Quality = 78L

# Même règle que `slugify` dans src/utils/slug.ts.
function Get-Slug([string]$Name) {
	$plain = ($Name.Normalize('FormD') -replace '\p{Mn}', '').ToLowerInvariant()
	$plain = $plain -replace 'œ', 'oe'
	return ($plain -replace '[^a-z0-9]+', '-').Trim('-')
}

# Image principale de la page de la Némésis : le recto de son plateau.
function Get-MatUrl([string]$Title) {
	$query = "action=query&format=json&prop=pageimages&piprop=original&redirects=1&titles=$([uri]::EscapeDataString($Title))"
	foreach ($api in $Apis) {
		$res = Invoke-RestMethod -Uri "${api}?$query" -UserAgent $UserAgent
		foreach ($page in $res.query.pages.PSObject.Properties.Value) {
			if ($page.original) { return $page.original.source }
		}
	}
	return $null
}

$jpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), $Quality

New-Item -ItemType Directory -Force $OutDir | Out-Null
$tmp = Join-Path ([System.IO.Path]::GetTempPath()) 'nemesis-art.tmp'
$missing = @()

foreach ($entry in $Nemeses.GetEnumerator()) {
	$target = Join-Path $OutDir "$(Get-Slug $entry.Key).jpg"
	if ((Test-Path $target) -and -not $Force) { continue }

	$url = Get-MatUrl $entry.Value
	if (-not $url) { $missing += "$($entry.Key) ($($entry.Value))"; continue }

	# Sans « format=original », le CDN de fandom renvoie du WebP, illisible par System.Drawing.
	if ($url -match 'wikia\.nocookie\.net') {
		$url += if ($url.Contains('?')) { '&format=original' } else { '?format=original' }
	}
	# curl.exe (fourni avec Windows) : le CDN de fandom refuse le client HTTP de PowerShell.
	curl.exe -sSfL -A $UserAgent -o $tmp $url
	if ($LASTEXITCODE -ne 0) { $missing += "$($entry.Key) (téléchargement refusé)"; continue }

	$src = [System.Drawing.Image]::FromFile($tmp)
	try {
		$cropH = [int]($src.Height * $ArtRatio)
		$height = [int]($Width * $cropH / $src.Width)
		$dst = New-Object System.Drawing.Bitmap $Width, $height
		$g = [System.Drawing.Graphics]::FromImage($dst)
		$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
		$g.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $Width, $height),
			(New-Object System.Drawing.Rectangle 0, 0, $src.Width, $cropH), [System.Drawing.GraphicsUnit]::Pixel)
		$dst.Save($target, $jpeg, $params)
		$g.Dispose(); $dst.Dispose()
		Write-Host "OK  $($entry.Key)"
	} finally {
		$src.Dispose()
	}
}

Remove-Item $tmp -ErrorAction SilentlyContinue
if ($missing.Count) {
	Write-Host "`nIntrouvables sur le wiki :" -ForegroundColor Yellow
	$missing | ForEach-Object { Write-Host "  $_" }
}
