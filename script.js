document.addEventListener('DOMContentLoaded', function() {
     const colors = ['Red', 'Black', 'White'];
    const memoryOptions = ['64GB', '128GB', '256GB'];
    const products = [
        [1001, 'iPhone 64GB Red'],
        [1002, 'iPhone 64GB Black'],
        [1003, 'iPhone 256GB Red'],
        [1004, 'iPhone 128GB Black']
    ];
    const productCombinations = [
        { productID: 1001, colorID: 0, memoryID: 0 },
        { productID: 1002, colorID: 1, memoryID: 0 },
        { productID: 1003, colorID: 0, memoryID: 2 },
        { productID: 1004, colorID: 1, memoryID: 1 }
    ];

    const colorButtons = document.getElementById('colorsDiv');
    const memoryButtons = document.getElementById('memoryDiv');
    const submitSelection = document.getElementById('submitBtn');
    let selectedColorId=null;
    let selectedMemoryId=null;
    colors.forEach((color, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-outline-primary';
        btn.textContent = color;
        btn.addEventListener('click', () => selectColor(index));
        colorButtons.appendChild(btn);
    });

    memoryOptions.forEach((memory, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-outline-secondary';
        btn.textContent = memory;
        btn.addEventListener('click', () => selectMemory(index));
        memoryButtons.appendChild(btn);
    });
    function selectColor(colorID) {
        selectedColorId = colorID;
        updateMemoryButtons(colorID);
        updateButtonSelection(colorButtons, colorID);
    }

    function selectMemory(memoryID) {
        selectedMemoryId = memoryID;
        updateColorButtons(memoryID);
        updateButtonSelection(memoryButtons, memoryID);
    }
       function updateMemoryButtons(selectedColorID) {
        const availableMemoryIDs = productCombinations
            .filter(combination => combination.colorID === selectedColorID)
            .map(combination => combination.memoryID);

        Array.from(memoryButtons.children).forEach((btn, index) => {
            btn.disabled = !availableMemoryIDs.includes(index);
            if (!availableMemoryIDs.includes(index)) {
                btn.classList.remove('active');
                btn.classList.add('disabled');
            } else {
                btn.classList.remove('disabled');
            }
        });
    }
    function updateColorButtons(selectedMemoryID) {
    const availableColorIDs = productCombinations
        .filter(combination => combination.memoryID === selectedMemoryID)
        .map(combination => combination.colorID);

    Array.from(colorButtons.children).forEach((btn, index) => {
        btn.disabled = !availableColorIDs.includes(index);
        if (!availableColorIDs.includes(index)) {
            btn.classList.remove('active');
            btn.classList.add('disabled');
        } else {
            btn.classList.remove('disabled');
        }
    });
}

    function updateButtonSelection(group, selectedIndex) {
        Array.from(group.children).forEach((btn, index) => {
            if (index === selectedIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function getProductID(colorID, memoryID) {
        const combination = productCombinations.find(combination => combination.colorID === colorID && combination.memoryID === memoryID);
        return combination ? combination.productID : null;
    }

    submitSelection.addEventListener('click', () => {
        const productID = getProductID(selectedColorId, selectedMemoryId);

        if (productID) {
            alert(`Selected Product ID: ${productID}`);
        } else {
            alert('No product available for the selected options.');
        }

        $('#staticBackdrop').modal('hide');
    });
});