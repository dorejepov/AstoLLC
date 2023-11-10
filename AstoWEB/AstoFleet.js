function selectTruck(truckId) {
    const trucks = document.querySelectorAll('.truck');
    trucks.forEach(truck => {
        truck.classList.remove('selected');
    });

    const selectedTruck = document.querySelector(`.truck-${truckId}`);
    selectedTruck.classList.add('selected');
}
