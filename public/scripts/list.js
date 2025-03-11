const NLDropdown = {
    HulpdienstDropdown: [
        { value: "all", text: "Alle Hulpdiensten" },
        { value: "Politie", text: "Politie" },
        { value: "Brandweer", text: "Brandweer" },
        { value: "Ambulance", text: "Ambulance" },
        { value: "Reddingsbrigade", text: "Reddingsbrigade" },
        { value: "KNRM", text: "KNRM" },
        { value: "ProRail", text: "ProRail" },
        { value: "Rijkswaterstaat", text: "Rijkswaterstaat" },
        { value: "Ziekenhuizen", text: "Ziekenhuizen" },
        { value: "Academies", text: "Academies" },
        { value: "Meldkamers", text: "Meldkamers" },
        { value: "Weginspecteurs", text: "Weginspecteurs" },
        { value: "Kustwacht", text: "Kustwacht" },
        { value: "Defensie", text: "Defensie" },
        { value: "Bergingsbedrijf", text: "Bergingsbedrijf" },
        { value: "KMAR/Douane", text: "KMAR/Douane" },
        { value: "Rijksrederij", text: "Rijksrederij" },
    ],
  
    RegioDropdown: [
        { value: "all", text: "Alle Regio's" },
        { value: "1", text: "1 - Groningen (HVDG)" },
        { value: "2", text: "2 - Fryslan (VRF)" },
        { value: "3", text: "3 - Drenthe (VRD)" },
        { value: "4", text: "4 - IJsselland (VRIJ)" },
        { value: "5", text: "5 - Twente (VRT)" },
        { value: "6", text: "6 - Noord en Oost-Gelderland (VNOG)" },
        { value: "7", text: "7 - Gelderland Midden (VGGM)" },
        { value: "8", text: "8 - Gelderland Zuid (VRGZ)" },
        { value: "9", text: "9 - Utrecht (VRU)" },
        { value: "10", text: "10 - Noord-Holland Noord (VRNHN)" },
        { value: "11", text: "11 - Zaanstreek-Waterland (VRZW)" },
        { value: "12", text: "12 - Kennemerland (VRK)" },
        { value: "13", text: "13 - Amsterdam-Amstelland (VRAA)" },
        { value: "14", text: "14 - Gooi en Vechtstreek (VRGV)" },
        { value: "15", text: "15 - Haaglanden (VRH)" },
        { value: "16", text: "16 - Hollands Midden (VRHM)" },
        { value: "17", text: "17 - Rotterdam-Rijnmond (VRR)" },
        { value: "18", text: "18 - Zuid-Holland Zuid (VRZHZ)" },
        { value: "19", text: "19 - Zeeland (VRZ)" },
        { value: "20", text: "20 - Midden en West-Brabant (VRMWB)" },
        { value: "21", text: "21 - Brabant-Noord (VRBN)" },
        { value: "22", text: "22 - Brabant Zuid Oost (VRBZO)" },
        { value: "23", text: "23 - Limburg-Noord (VRLN)" },
        { value: "24", text: "24 - Zuid-Limburg (VRZL)" },
        { value: "25", text: "25 - Flevoland (VRFL)" },
        { value: "26", text: "26 - NIPV (IFV)" },
        { value: "28", text: "28 - Defentie (DF)" },
        { value: "NN", text: "NN - Noord-Nederland (RWS)" },
        { value: "ON", text: "ON - Oost-Nederland (RWS)" },
        { value: "MN", text: "MN - Midden-Nederland (RWS)" },
        { value: "WNN", text: "WNN - West-Nederland-Noord (RWS)" },
        { value: "WNZ", text: "WNZ - West-Nederland-Zuid (RWS)" }, 
        { value: "ZD", text: "ZD - Zee en Delta (RWS)" },
        { value: "ZN", text: "ZN - Zuid-Nederland (RWS)" }, 
        { value: "NN", text: "NN - Noord-Nederland (Politie)" },
        { value: "ON", text: "ON - Oost-Nederland (Politie)" },
        { value: "MD", text: "MD - Midden-Nederland (Politie)" },
        { value: "NH", text: "NH - Noord-Holland (Politie)" },
        { value: "AD", text: "AD - Amsterdam (Politie)" },
        { value: "DH", text: "DH - Den Haag (Politie)" },
        { value: "RT", text: "RT - Rotterdam (Politie)" },
        { value: "ZB", text: "ZB - Zuid-Brabant (Politie)" },
        { value: "OB", text: "OB - Oost-Brabant (Politie)" },
        { value: "LB", text: "LB - Limburg (Politie)" }, 
    ]
  };
  
  const BEDropdown = {
    HulpdienstDropdown: [
        { value: "all", text: "Alle Hulpdiensten" },
        { value: "Politie", text: "Politie" },
        { value: "Brandweer", text: "Brandweer" },
        { value: "Ambulance", text: "Ambulance" },
        { value: "Reddingsbrigade", text: "Reddingsbrigade" },
        { value: "Kustwacht", text: "Kustwacht" },
        { value: "Ziekenhuizen", text: "Ziekenhuizen" },
        { value: "Academies", text: "Academies" },
        { value: "Meldkamers", text: "Meldkamers" },
    ],
  
    RegioDropdown: [
        { value: "all", text: "Alle Regio's" },
        { value: "Antwerpen", text: "Antwerpen" },
        { value: "Brussel", text: "Brussel" },
        { value: "Limburg", text: "Limburg" },
        { value: "Oost-Vlaanderen", text: "Oost-Vlaanderen" },
        { value: "Vlaams-Brabant", text: "Vlaams-Brabant" },
        { value: "West-Vlaanderen", text: "West-Vlaanderen" },
        { value: "Henegouwen", text: "Henegouwen" },
        { value: "Luik", text: "Luik" },
        { value: "Luxemburg", text: "Luxemburg" },
        { value: "Waals-Brabant", text: "Waals-Brabant" },
        { value: "Namen", text: "Namen"},
    ]
  };
  
const table = document.getElementById('list_table');
const input = document.getElementById('search-input');
const hulpdienstDropdown = document.getElementById('hulpdienst-dropdown');
const regioDropdown = document.getElementById('regio-dropdown');
const scrollableContent = document.querySelector('.scroll-content');

let count = 100;
let preprocessedDataset = [];
let filteredData = [];
let offset = 0;
let isScrollting = false;
let scrollTimeout;
let allRowsRendered = false;
  
  function convertSheetDataToJSON(sheetData) {
      const headers = sheetData[2]; 
      const rows = sheetData.slice(3); 
  
      return rows.map(row => {
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = row[index] ? row[index].trim() : ''; 
        });
        return obj;
      });
  }
  
  function preprocessDataset(dataset) {
      return dataset.map((row) => {
        const searchField = [
          row.Adres,
          row.Roepnummer,
          row.Afkorting,
          row.TypeVoertuig, 
          row.Kenteken,
          row.Bijzonderheden,
          row.Hulpdienst,
          row.Regio,
        ].map(field => (field ? field.toLowerCase() : '')).join(' ');
  
        return {
          ...row,
          _searchField: searchField,
        };
      });
  }
  

function populateDropdown(dropdownButton, dropdownData) {
    const dropdownMenuWrapper = dropdownButton.nextElementSibling; // Get the dropdown wrapper
    const dropdownMenu = dropdownMenuWrapper.querySelector('.dropdown-menu'); // Get the dropdown menu (ul)

    // Clear only the dropdown menu items, not the entire wrapper
    dropdownMenu.innerHTML = '';

    // Populate the dropdown menu with new items
    dropdownData.forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('value', item.value);
        li.textContent = item.text;
        dropdownMenu.appendChild(li);
    });

    // Reinitialize the dropdown after populating it
    initializeCustomDropdown(dropdownButton, updAndClear);
}

function filterRegioDropdown(hulpdienstValue) {
    const regioDropdownButton = document.getElementById('regio-dropdown');
    const regioDropdownMenu = regioDropdownButton.nextElementSibling.querySelector('.dropdown-menu');
    regioDropdownMenu.innerHTML = '';

    const dropdownData = window.location.search.includes('NL') ? NLDropdown : BEDropdown;

    let filteredRegions = [];

    // Check if the URL includes 'NL'
    const includesNL = window.location.search.includes('NL');

    if (hulpdienstValue === 'all') {
        filteredRegions = dropdownData.RegioDropdown;
        regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
        regioDropdownButton.setAttribute('data-value', 'all');
    } else if (hulpdienstValue === 'Politie' && includesNL) {
        // Only filter for Politie if the URL includes 'NL'
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(Politie)')
        );
        regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
        regioDropdownButton.setAttribute('data-value', 'all');
    } else if ((hulpdienstValue === 'Rijkswaterstaat' || hulpdienstValue === 'Weginspecteurs') && includesNL) {
        // Only filter for Rijkswaterstaat or Weginspecteurs if the URL includes 'NL'
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => region.value === 'all' || region.text.includes('(RWS)')
        );
        regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
        regioDropdownButton.setAttribute('data-value', 'all');
    } else {
        // Default filter for other cases
        filteredRegions = dropdownData.RegioDropdown.filter(
            region => !region.text.includes('(Politie)') && !region.text.includes('(RWS)')
        );
        regioDropdownButton.innerHTML = `Alle Regio's <i class="fa fa-chevron-down"></i>`;
        regioDropdownButton.setAttribute('data-value', 'all');
    }

    populateDropdown(regioDropdownButton, filteredRegions);
}

function updateHulpdienstDropdown(regioValue) {
    const hulpdienstDropdownButton = document.getElementById('hulpdienst-dropdown');

    // Check if the URL includes 'NL'
    const includesNL = window.location.search.includes('NL');

    if (regioValue && regioValue.includes('(Politie)') && includesNL) {
        hulpdienstDropdownButton.innerHTML = `Politie <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'Politie');
        filterRegioDropdown('Politie');
    } else if (regioValue && regioValue.includes('(RWS)') && includesNL) {
        hulpdienstDropdownButton.innerHTML = `Rijkswaterstaat <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'Rijkswaterstaat');
        filterRegioDropdown('Rijkswaterstaat');
    } else {
        hulpdienstDropdownButton.innerHTML = `Alle Hulpdiensten <i class="fa fa-chevron-down"></i>`;
        hulpdienstDropdownButton.setAttribute('data-value', 'all');
        filterRegioDropdown('all');
    }
}

function initializeCustomDropdown(dropdownButton, callback) {
    const dropdownMenu = dropdownButton.nextElementSibling.querySelector('.dropdown-menu');
    const dropdownItems = dropdownMenu.querySelectorAll('li');

    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('visible');
    });

    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            const searchInput = document.getElementById('search-input');

            if (searchInput) {
                searchInput.value = ''; 
            }

            dropdownButton.innerHTML = `${item.textContent} <i class="fa fa-chevron-down"></i>`;
            dropdownButton.setAttribute('data-value', item.getAttribute('value'));

            dropdownMenu.classList.remove('visible');

            if (dropdownButton.id === 'regio-dropdown') {
                updateHulpdienstDropdown(item.textContent);
            }

            if (dropdownButton.id === 'hulpdienst-dropdown') {
                const hulpdienstValue = item.getAttribute('value');
                filterRegioDropdown(hulpdienstValue); 
            }

            callback();
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('visible');
        }
    });
}





  
  
  function filterAndSearchDataset(query, region, service, dataset) {
      const lowerQuery = query.toLowerCase();
      const filtered = [];
  
      dataset.forEach((item, index, array) => {
          const matchesRegion = region === 'all' || item.Regio === region;
          const matchesService = service === 'all' || item.Hulpdienst === service;
  
          const matchesSearch =
              lowerQuery === '' ||
              item._searchField.includes(lowerQuery) ||
              item.TypeVoertuig.toLowerCase().includes(lowerQuery) ||
              (item.Roepnummer && item.Roepnummer.toLowerCase().includes(lowerQuery)); 
  
          if (item.TypeVoertuig === '' && item.Adres) {
              let childIndex = index + 1;
              let hasMatchingChild = false;
  
              while (
                  childIndex < array.length &&
                  array[childIndex].TypeVoertuig !== ''
              ) {
                  const childRow = array[childIndex];
                  const childMatchesSearch =
                      childRow._searchField.includes(lowerQuery) ||
                      childRow.TypeVoertuig.toLowerCase().includes(lowerQuery) ||
                      (childRow.Roepnummer && childRow.Roepnummer.toLowerCase().includes(lowerQuery)); 
  
                  if (childMatchesSearch) {
                      hasMatchingChild = true;
                      break; 
                  }
                  childIndex++;
              }
  
              if (
                  matchesRegion &&
                  matchesService &&
                  (hasMatchingChild || 
                   (lowerQuery === '' || item.Adres.toLowerCase().includes(lowerQuery)))
              ) {
                  filtered.push(item);
              }
          } else if (matchesRegion && matchesService && matchesSearch) {
              filtered.push(item);
          }
      });
  
      return filtered;
  }
  

function updateList(shouldClear = true) {
    const query = input.value || '';
    const region = regioDropdown.getAttribute('data-value') || 'all';
    const service = hulpdienstDropdown.getAttribute('data-value') || 'all';

    filteredData = filterAndSearchDataset(query, region, service, preprocessedDataset);

    if (shouldClear) {
        offset = 0; // Reset offset when clearing the list
        allRowsRendered = false;
    }

    const containersHolder = document.getElementById('containers-holder');

    // Clear the container only if shouldClear is true
    if (shouldClear) {
        containersHolder.innerHTML = ''; // Clear the container
    }

    if (filteredData.length === 0) {
        if (query === '') {
            // No matches found when switching hulpdienst value
            const noMatchDiv = document.createElement('div');
            noMatchDiv.className = 'container';
            const header = document.createElement('div');
            header.className = 'header';
            header.textContent = 'Word nog aan de lijst gewerkt, dit kan even duren!';
            noMatchDiv.appendChild(header);
            containersHolder.appendChild(noMatchDiv);
        } else {
            // No matches found when searching
            const noMatchDiv = document.createElement('div');
            noMatchDiv.textContent = 'Geen overeenkomsten gevonden.';
            noMatchDiv.style.textAlign = 'center';
            noMatchDiv.style.padding = '20px';
            noMatchDiv.style.color = '#888';
            containersHolder.appendChild(noMatchDiv);
        }
    } else {
        generateVisibleRows(filteredData, count, shouldClear); // Pass shouldClear to generateVisibleRows
    }
}


  
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const debouncedUpdateInfoGroupHeight = debounce(updateInfoGroupHeight, 100);

function updateInfoGroupHeight() {
    // console.log('Updating info group heights...');
    const infoGroups = document.querySelectorAll('.info-group');
    infoGroups.forEach(infoGroup => {
        const infoBox = infoGroup.querySelector('.info-box');
        if (infoBox) {
            let infoBoxHeight = infoBox.offsetHeight;

            if (window.innerWidth < 350) {
                infoBox.style.minHeight = `${MIN_INFO_BOX_HEIGHT}px`;
                infoBoxHeight = Math.max(infoBoxHeight, MIN_INFO_BOX_HEIGHT);
            } else {
                infoBox.style.minHeight = '';
            }

            const newHeight = infoBoxHeight + 4;
            infoGroup.style.height = `${newHeight}px`;
        }
    });
}

function generateVisibleRows(dataset, amount, shouldClear = false) {
    const containersHolder = document.getElementById('containers-holder');

    // console.log('Generate Visible:', amount, offset); 

    if (shouldClear) {
        containersHolder.innerHTML = '';
        offset = 0; // Reset the global offset
    }

    if (dataset.length === 0) {
        const noMatchDiv = document.createElement('div');
        noMatchDiv.textContent = 'Geen overeenkomsten gevonden.';
        noMatchDiv.style.textAlign = 'center';
        noMatchDiv.style.padding = '20px';
        noMatchDiv.style.color = '#888';
        containersHolder.appendChild(noMatchDiv);
        return;
    }

    let currentAddress = '';
    let currentContainer = null;
    let renderedCount = 0;

    for (let i = offset; i < dataset.length; i++) {
        const row = dataset[i];

        if (row.TypeVoertuig === '' && row.Adres) {
            if (renderedCount >= amount && currentContainer !== null) {
                break;
            }

            currentAddress = row.Adres;
            currentContainer = document.createElement('div');
            currentContainer.className = 'container';

            const header = document.createElement('div');
            header.className = 'header';
            header.textContent = currentAddress;
            currentContainer.appendChild(header);

            containersHolder.appendChild(currentContainer);

            let j = i + 1;
            while (j < dataset.length && dataset[j].TypeVoertuig !== '') {
                const childRow = dataset[j];
                const infoGroup = createInfoGroup(childRow);
                currentContainer.appendChild(infoGroup);
                renderedCount++;
                j++;
            }

            // console.log(j);

            offset = j; // Update global offset
            i = j - 1;
        } else if (currentContainer && row.TypeVoertuig !== '') {
            const infoGroup = createInfoGroup(row);
            currentContainer.appendChild(infoGroup);
            renderedCount++;
        }

        if (renderedCount >= amount) {
            break;
        }
    }

    if (offset >= dataset.length) {
        allRowsRendered = true;
    }

    // console.log("Set offset to: ", offset);

    debouncedUpdateInfoGroupHeight();
}


function createInfoGroup(row) {
    const infoGroup = document.createElement('div');
    infoGroup.className = 'info-group';

    const infoContainer1 = document.createElement('div');
    infoContainer1.className = 'info-container';

    const roepnummerBox = document.createElement('div');
    roepnummerBox.className = 'info-box';
    const roepnummerLabel = document.createElement('div');
    roepnummerLabel.className = 'label';
    roepnummerLabel.textContent = 'Roepnummer';
    const roepnummerValue = document.createElement('div');
    roepnummerValue.className = 'value';
    roepnummerValue.textContent = row.Roepnummer || '';
    roepnummerBox.appendChild(roepnummerLabel);
    roepnummerBox.appendChild(roepnummerValue);
    infoContainer1.appendChild(roepnummerBox);

    const typeVoertuigBox = document.createElement('div');
    typeVoertuigBox.className = 'info-box';
    const toggleBtn = document.createElement('div');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.innerHTML = '<i class="fa fa-chevron-down"></i>';
    toggleBtn.onclick = function () {
        toggleDetails(this);
    };
    const typeVoertuigLabel = document.createElement('div');
    typeVoertuigLabel.className = 'label';
    typeVoertuigLabel.textContent = 'Type Voertuig';
    const typeVoertuigValue = document.createElement('div');
    typeVoertuigValue.className = 'value';
    typeVoertuigValue.textContent = row.TypeVoertuig || '';
    typeVoertuigBox.appendChild(toggleBtn);
    typeVoertuigBox.appendChild(typeVoertuigLabel);
    typeVoertuigBox.appendChild(typeVoertuigValue);
    infoContainer1.appendChild(typeVoertuigBox);

    infoGroup.appendChild(infoContainer1);

    const infoContainer2 = document.createElement('div');
    infoContainer2.className = 'info-container toggle-section hidden';

    const afkortingBox = document.createElement('div');
    afkortingBox.className = 'info-box';
    const afkortingLabel = document.createElement('div');
    afkortingLabel.className = 'label';
    afkortingLabel.textContent = 'Afkorting';
    const afkortingValue = document.createElement('div');
    afkortingValue.className = 'value';
    afkortingValue.textContent = row.Afkorting || '';
    afkortingBox.appendChild(afkortingLabel);
    afkortingBox.appendChild(afkortingValue);
    infoContainer2.appendChild(afkortingBox);

    const kentekenBox = document.createElement('div');
    kentekenBox.className = 'info-box';
    const kentekenLabel = document.createElement('div');
    kentekenLabel.className = 'label';
    kentekenLabel.textContent = 'Kenteken';
    const kentekenValue = document.createElement('div');
    kentekenValue.className = 'value';
    kentekenValue.textContent = row.Kenteken || '';
    kentekenBox.appendChild(kentekenLabel);
    kentekenBox.appendChild(kentekenValue);
    infoContainer2.appendChild(kentekenBox);

    if (row.Bijzonderheden && row.Bijzonderheden.trim() !== '') {
        const bijzonderhedenBox = document.createElement('div');
        bijzonderhedenBox.className = 'info-box large';
        const bijzonderhedenLabel = document.createElement('div');
        bijzonderhedenLabel.className = 'label';
        bijzonderhedenLabel.textContent = 'Bijzonderheden';
        const bijzonderhedenValue = document.createElement('div');
        bijzonderhedenValue.className = 'value';
        bijzonderhedenValue.textContent = row.Bijzonderheden || '';
        bijzonderhedenBox.appendChild(bijzonderhedenLabel);
        bijzonderhedenBox.appendChild(bijzonderhedenValue);
        infoContainer2.appendChild(bijzonderhedenBox);
    }

    infoGroup.appendChild(infoContainer2);

    return infoGroup;
}
  
scrollableContent.addEventListener('scroll', () => {
    if (isScrollting || allRowsRendered) return;
    isScrollting = true;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        // Check if the user has scrolled near the bottom of the .scroll-content element
        if (
            scrollableContent.scrollTop + scrollableContent.clientHeight >= scrollableContent.scrollHeight - 5 &&
            !allRowsRendered &&
            filteredData.length > offset
        ) {
            console.log('Scroll: ', count, offset); // Debugging log
            generateVisibleRows(filteredData, count, false);
        }
        isScrollting = false;
    }, 200);
});

  
updateList(true);
  

document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = window.location.search.substring(1);
    const region = urlParams;

    const sheetData = await fetchDataFromGoogleSheets(region);
    const jsonData = convertSheetDataToJSON(sheetData);
    preprocessedDataset = preprocessDataset(jsonData);

    if (region === 'NL') {
        dropdownData = NLDropdown;
        document.querySelector('a[href="../list.html?NL"]').style.color = 'var(--accent-color)';
    } else if (region === 'BE') {
        dropdownData = BEDropdown;
        document.querySelector('a[href="../list.html?BE"]').style.color = 'var(--accent-color)';
    }

    populateDropdown(hulpdienstDropdown, dropdownData.HulpdienstDropdown);
    populateDropdown(regioDropdown, dropdownData.RegioDropdown);

    initializeCustomDropdown(hulpdienstDropdown, updateList);
    initializeCustomDropdown(regioDropdown, updateList);

    // Set the dropdown value based on the stored alt text
    const selectedDropdownValue = localStorage.getItem("selectedDropdownValue");
    if (selectedDropdownValue) {
        const dropdownButton = document.getElementById('hulpdienst-dropdown');
        const dropdownMenu = dropdownButton.nextElementSibling.querySelector('.dropdown-menu');
        const dropdownItems = dropdownMenu.querySelectorAll('li');

        dropdownItems.forEach(item => {
            if (item.getAttribute('value') === selectedDropdownValue) {
                dropdownButton.innerHTML = `${item.textContent} <i class="fa fa-chevron-down"></i>`;
                dropdownButton.setAttribute('data-value', item.getAttribute('value'));
                filterRegioDropdown(item.getAttribute('value'));
            }
        });

        // Clear the stored value after setting the dropdown
        localStorage.removeItem("selectedDropdownValue");
    }

    updateList(true);

    input.addEventListener('input', debounce(updateList, 300));

    setTimeout(() => {
        // Select the loader element
        const loader = document.querySelector('#showbox-holder');
    
        if (loader) {
            loader.classList.add('fade-out');

            document.documentElement.style.overflow = '';

            if (typeof window.updateScrollbar === 'function') {
                window.updateScrollbar();
            }
    
            setTimeout(() => {
                if (loader) {
                    loader.style.display = 'none';
                }
            }, 600);
        }
    }, 250);
});
  
  async function fetchDataFromGoogleSheets(region) {
      const response = await fetch(`/fetch-sheet?region=${region}`);
      const data = await response.json();
      return data.values;
  }