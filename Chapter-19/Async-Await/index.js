async function fetchData(params) {
     try {
          const url = 'https://jsonplaceholder.typicode.com/users/1';
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          
     } catch (error) {
          console.log('Error',error);
          
     }
};
fetchData();