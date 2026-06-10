# Global Ecosystems Atlas Metadata

This folder houses a range of metadata relevant to compiling and presenting the Global Ecosystems Atlas, including:

#### Colour palettes

* Standardised colour palettes provided in list and tabular format to enable consistent graphical of Atlas classes (IUCN GET) across platforms.
* Palette values are represented as both Hex codes and RGB colour levels. 

#### Pixel values: 

* A standard numerical scheme ("PixelValue", integer) is presented for GET classes used in the Global Ecosystems Atlas.
* This variable is essential for:
      (i) supporting statistical models tasked with estimating the distribution of ecosystems
      (ii) representing the Global Ecosystem Typology as an 8-bit raster data in the Global Ecosystems Atlas Synthesis dataset. 
* The numeral scheme was designed to be able to accommodate changes in any future versions or updates of the IUCN Global Ecosystem Typology.

#### Standalone EFG Layers
* These ensure legitimately co-occuring EFGs are captured in separate standalone binary layers to the synthesis map
* The synthesis map EFG layer represents ecosystems on the continuous surface layer of the earth, such as terrestrial and benthic ecosystems, while the standalone layers capture those that co-occur with these surface ecosystems, such as pelagic and subterranean ecosystems.
* The full _suggested_ list of standalone EFGs is as follows:  
S1.1 Aerobic caves. These are served as single 100m pixels at the cave entrance, as source data is typically served as point occurences.  
S1.2 Endolithic systems  
S2.1 Anthropogenic subterranean voids   
SF1.1 Underground streams and pools  
SF1.2 Groundwater ecosystems  
SF2.1 Water pipes and subterranean canals  
SF2.2 Flooded mines and other voids  
SM1.1 Anchialine caves. These are served as single 100m pixels at the cave entrance.  
SM1.3 Sea caves. These are served as single 100m pixels at the cave entrance.  
F2.10 Subglacial lakes, served as single 100m pixels per point occurrence.  
M1.9 Upwelling zones  
M2.1 Epipelagic ocean waters  
M2.2 Mesopelagic ocean water  
M2.3 Bathypelagic ocean waters  
M2.4 Abyssopelagic ocean waters  
M2.5 Sea ice  
M4.1 Submerged artificial structures, served as single 100m pixels per point occurrence.  
MFT 1.1 Coastal river deltas  
  * Note: EFGs with a "*" in the standalone_EFG field in the efg_pixelvalues file represent the main EFGs up for discussion on whether they should be treated as standalone EFGs or not.


#### Change-log

* A .md document providing a log of each notable change of the Global Ecosystems Atlas data products or resources.

### License
This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg


### Further information:
For any enquiries about this repository please contact [Nick Murray](mailto:nicholas.murray@jcu.edu.au) or [Ben Cresswell](mailto:benjamin.cresswell@jcu.edu.au).

