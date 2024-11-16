// Dữ liệu về động vật
const animals = [
    {
      "id": 1,
      "name": "Chó",
      "scientific_name": "Canis lupus familiaris",
      "physical_description": "Chó là động vật có bốn chân, bộ lông mềm, mũi nhọn.",
      "habitat": "Chó sống chủ yếu trong môi trường đô thị, nhà ở của con người.",
      "conservation_status": "Ít quan tâm"
    },
    {
      "id": 2,
      "name": "Mèo",
      "scientific_name": "Felis catus",
      "physical_description": "Mèo là động vật có bộ lông mềm mượt, móng vuốt sắc nhọn.",
      "habitat": "Mèo sống chủ yếu trong môi trường sống của con người, nhưng cũng có thể sinh sống trong tự nhiên.",
      "conservation_status": "Ít quan tâm"
    },
    {
      "id": 3,
      "name": "Heo",
      "scientific_name": "Sus scrofa domesticus",
      "physical_description": "Heo có thân hình tròn, mũi tròn và lông cứng.",
      "habitat": "Heo sống trong chuồng trại hoặc các trang trại.",
      "conservation_status": "Ít quan tâm"
    },
    {
      "id": 4,
      "name": "Vọoc chà vá chân nâu",
      "scientific_name": "Pygathrix nigripes",
      "physical_description": "Vọoc có bộ lông màu xám với đôi chân có màu nâu đặc trưng.",
      "habitat": "Vọoc sống trong các khu rừng nhiệt đới tại Đông Nam Á.",
      "conservation_status": "Nguy cấp"
    },
    {
      "id": 5,
      "name": "Khỉ đít đỏ",
      "scientific_name": "Rhinopithecus roxellana",
      "physical_description": "Khỉ đít đỏ có lông đỏ ở phần mông và bụng.",
      "habitat": "Khỉ sống trong các khu rừng núi tại Trung Quốc.",
      "conservation_status": "Nguy cấp"
    }
  ];
  
  // Hàm hiển thị danh sách động vật trên trang chủ
  function displayAnimalList(animals) {
    const animalList = document.getElementById("animal-list");
    animalList.innerHTML = '';  // Xóa danh sách hiện tại
    animals.forEach(animal => {
      const animalCard = document.createElement("div");
      animalCard.classList.add("animal-card");
      animalCard.innerHTML = `
        <h3>${animal.name}</h3>
        <button onclick="showAnimalDetail(${animal.id})">Xem chi tiết</button>
      `;
      animalList.appendChild(animalCard);
    });
  }
  
  // Hàm hiển thị thông tin chi tiết động vật
  function showAnimalDetail(id) {
    const animal = animals.find(a => a.id === id);
    if (animal) {
      document.getElementById("animal-name").textContent = animal.name;
      document.getElementById("scientific-name").textContent = animal.scientific_name;
      document.getElementById("physical-description").textContent = animal.physical_description;
      document.getElementById("habitat").textContent = animal.habitat;
      document.getElementById("conservation-status").textContent = animal.conservation_status;
    }
  }
  
  // Hàm tìm kiếm động vật
  document.getElementById("search-bar").addEventListener("input", function(event) {
    const query = event.target.value.toLowerCase();
    const filteredAnimals = animals.filter(animal => animal.name.toLowerCase().includes(query));
    displayAnimalList(filteredAnimals);
  });
  
  // Hiển thị toàn bộ danh sách động vật khi tải trang
  displayAnimalList(animals);
  