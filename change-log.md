# Global Ecosystems Atlas Changelog

This document provides a log of all notable changes of the Global Ecosystems Atlas data products or resources. We list notable changes by date and include notable changes, major new features, announcements, or data products. Please note that changes to the Global Ecosystems Atlas Initiative prior to September 1 2025 are not listed here. We use principles from [keep a change log](https://keepachangelog.com/en/1.1.0/).

## Unreleased - Late June 2026
#### Added
* Functionality to update existing source data with new versions
* Addition of 20-30 new datasets
* Addition of JCU inference maps

#### Fixed
* GLIMS glacier data processing issues

## v0.0.13 - 3 April 2026
* v0.0.13 synthesis map export completed

#### Added
* Functionality to directly ingest cross-reference tables via a scripted workflow

#### Changed
* Data mask layer displays where pixels were assigned an EFG, true no data pixels and pixels that were mapped in the source data but could not be cross-referenced to Level 3 of the GET

#### Fixed
* Data mask fixes implemented

## v0.0.12 - 24 February 2026
* v0.0.12 synthesis map export completed

#### Changed
* Marine aquaculture class removed from standalone EFG list, now displays in the single EFG layer

#### Fixed
* Lake Malawi cross-reference inconsistencies across borders
* Small shifts between some of the data bands fixed
* Spatial shifts in South Africa also fixed

## v0.0.11 - 6 February 2026
* v0.0.11 synthesis map export completed

#### Changed
* cell size layer to display "999" for vector data

#### Fixed
* Data mask now displays three values (0,1,2) for true no data, data incompatible with the GET, and data cross-referenced to EFG
* Resolution issue resolved
* Deep sea EFGs correctly reordered in the overlap index

#### Removed
* GLIMS glacier dataset due to issues processing the dataset, to be readded once resolved

## v0.0.10 - 26 January 2026
* v0.0.10 synthesis map export completed minus the data mask layer

#### Added
* Ten datasets added to the synthesis map

#### Changed
* Now using vector format for the Global Mangrove Watch dataset
* Geospatial processing switched to a fully scripted pipeline

#### Fixed
* Arctic coastline issue caused by intersections with the sea ice data resolved 

#### Removed
* SDPT v2 dataset "planted forest" class due to incompatibilities with the GET.

## 1 September 2025
* New Github organisation established ([link](https://github.com/Global-Ecosystems-Atlas)).
* Previous Github organisation archived and users redirected ([link](https://github.com/geo-global-ecosystem-atlas).

## 17 September 2025
* Global Ecosystems Atlas colour palette and numeral scheme made available via Github ([link](https://github.com/Global-Ecosystems-Atlas/metadata))
* IUCN Cross-referencing tables made open-access ([link](https://github.com/Global-Ecosystems-Atlas/cross-reference-tables))
