<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="3.28.0" styleCategories="AllStyleCategories">
  <pipe>
    <rasterrenderer type="paletted" opacity="1" band="3" nodataColor="">
      <rasterTransparency/>
      <minMaxOrigin>
        <limits>None</limits>
        <extent>WholeRaster</extent>
        <statAccuracy>Estimated</statAccuracy>
        <cumulativeCutLower>0.02</cumulativeCutLower>
        <cumulativeCutUpper>0.98</cumulativeCutUpper>
      </minMaxOrigin>
      <colorPalette>
        <paletteEntry value="0" color="#ffffff" label="No data" alpha="255"/>
        <paletteEntry value="1" color="#3f8e33" label="Terrestrial" alpha="255"/>
        <paletteEntry value="2" color="#ce8e34" label="Subterranean" alpha="255"/>
        <paletteEntry value="3" color="#d55b41" label="Subterranean-Freshwater" alpha="255"/>
        <paletteEntry value="4" color="#abaa37" label="Subterranean-Marine" alpha="255"/>
        <paletteEntry value="5" color="#2f675c" label="Terrestrial-Freshwater" alpha="255"/>
        <paletteEntry value="6" color="#4eacb0" label="Freshwater" alpha="255"/>
        <paletteEntry value="7" color="#853e90" label="Freshwater-Marine" alpha="255"/>
        <paletteEntry value="8" color="#2860c4" label="Marine" alpha="255"/>
        <paletteEntry value="9" color="#484992" label="Marine-Terrestrial" alpha="255"/>
        <paletteEntry value="10" color="#bf3250" label="Marine-Freshwater-Terrestrial" alpha="255"/>
      </colorPalette>
    </rasterrenderer>
    <brightnesscontrast brightness="0" contrast="0"/>
    <huesaturation saturation="0" grayscaleMode="0" colorizeOn="0" colorizeRed="255" colorizeGreen="128" colorizeBlue="128" colorizeStrength="100"/>
    <rasterresampler maxOversampling="2"/>
    <resamplingStage>provider</resamplingStage>
  </pipe>
  <blendMode>0</blendMode>
</qgis>