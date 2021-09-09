let memory = "8GB";

document.getElementById("memory-extra").addEventListener("click", function () {
    if (memory !== "16GB") {
        memory = "16GB";
        const extraPrice = document.getElementById("Extra-memory-cost");
        const extraCost = extraPrice.innerHTML;
        extraPrice.innerHTML = parseFloat(extraCost) + 180;
    }
})

document.getElementById("normal-memory").addEventListener("click", function () {
    if (memory == "16GB") {
        memory = "8GB";
        const extraPrice = document.getElementById("Extra-memory-cost");
        const extraCost = extraPrice.innerHTML;
        extraPrice.innerHTML = parseFloat(extraCost) - 180;
    }
})

let storage = "256GB";
document.getElementById("hundred-extra").addEventListener("click", function () {
    if (storage !== "512GB") {
        storage = "512GB";
        const storageCost = document.getElementById("storage-cost");
        const storagePrice = storageCost.innerHTML;
        storageCost.innerHTML = parseFloat(storagePrice) + 100;
        console.log(storagePrice);
    }
})

document.getElementById("no-extra").addEventListener("click", function () {
    if (storage == "512GB") {
        storage = "256GB";
        const storageCost = document.getElementById("storage-cost");
        const storagePrice = storageCost.innerHTML;
        storageCost.innerHTML = parseFloat(storagePrice) - 100;
    }
})

document.getElementById("more-extra").addEventListener("click", function () {
    if (storage !== "256GB") {
        storage = "1TB";
        const storageCost = document.getElementById("storage-cost");
        const storagePrice = storageCost.innerHTML;
        storageCost.innerHTML = parseFloat(storagePrice) + 180;

    }
})

let deliveryDate = "Friday";

document.getElementById("extra-charge").addEventListener("click", function () {
    if (deliveryDate !== "monday") {
        deliveryDate = "monday";
        const deliveryPrice = document.getElementById("delivery-charge");
        const extraDeliveryCost = deliveryPrice.innerHTML;
        deliveryPrice.innerHTML = parseFloat(extraDeliveryCost) + 20;
    }
})

document.getElementById("no-charge").addEventListener("click", function () {
    if (deliveryDate == "monday") {
        deliveryDate = "Friday";
        const deliveryPrice = document.getElementById("delivery-charge");
        const extraDeliveryCost = deliveryPrice.innerHTML;
        deliveryPrice.innerHTML = parseFloat(extraDeliveryCost) - 20;
    }
})

/*function calculateTotal() {
    const priceInput = document.getElementById("memory-extra");
    const memoryExtra = parseFloat(priceInput.value);
    const total = memoryExtra + 1299;
    console.log(total);
}*/

function getInputValue(memory) {
    const priceInput = document.getElementById("memory-extra" + "normal-memory");
    const memoryExtra = parseFloat(priceInput.value);
    return memoryExtra;
}

function calculateTotal() {
    const extraMemory = getInputValue("memory-extra") + 1299;
    const normalMemory = getInputValue("normal-memory") + 0;
}