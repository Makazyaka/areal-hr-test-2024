<template>
  <div class="container">
    <div class="square">
      <div class="header">
        Добро пожаловать в систему учета сотрудников!
      </div>
      <p class="sub-header">
        Управляйте отделами, сотрудниками и историей работы.
      </p>
      <p class="description">
        Наша платформа предоставляет вам мощные инструменты для оптимизации бизнес-процессов, управления организационной структурой и отслеживания карьерных достижений сотрудников. 
        Ведите учет всех изменений в компании, создавайте и редактируйте отделы, а также контролируйте все процессы с одного удобного интерфейса.
      </p>
      <div class="button-box">
        <button class="button" @click="goToPage('authorization')">Авторизация</button>
        <button class="button exit" @click="exitApp">Выход</button>
      </div>
    </div>
    <div class="logo-box">
      <img src="@/assets/user.png" alt="Логотип" class="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroPage",
  methods: {
    goToPage(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #e7e7e7, #91dbe0);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  color: #333;
}

.container {
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 100px; 
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  box-sizing: border-box;
}

.square {
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  color: rgb(0, 0, 0);
  font-weight: 600;
  text-align: center;
  padding: 30px;
  box-sizing: border-box;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.sub-header {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 20px;
}

.description {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  padding: 0 15px;
  line-height: 1.5;
  max-height: 120px;
  overflow-y: auto;
}

.button-box {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
}

.button {
  padding: 11px 2px;
  font-size: 22px;
  color: white;
  background-color: #3c7880;
  border: none;
  border-radius: 120px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  max-width: 300px;
  text-align: center;
}

.button:hover {
  background-color: #53bacc;
  transform: translateY(-4px);
}

.button:active {
  transform: translateY(2px);
}

.exit  {
  display: inline-block;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #ff0000; 
  background-color: #ffffff; 
  border: 2px solid #ff0000; 
  border-radius: 120px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.exit:hover {
  background-color: #ff0000; 
  color: #ffffff; 
}

.exit:active {
  background-color: #cc0000; 
  color: #ffffff;
}

.exit:disabled {
  background-color: #f0f0f0; 
  color: #cccccc;
  cursor: not-allowed;
}

.logo-box {
  width: 512px; 
  height: 512px;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333; 
  border-radius: 333px; 
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; 
}

.container {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>