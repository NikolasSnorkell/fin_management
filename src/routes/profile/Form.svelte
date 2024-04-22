<script>
    let email = '';
    let password = '';
  
    


    async function handleSubmit() {
      let response = await fetch('https://127.0.0.1/test.php?id=11', {
        // method: 'DELETE',
        // headers: { 'Content-Type': 'application/json'},
        // body: JSON.stringify({ title:email, done:0 })
      });
    //   data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((x) => x.json());
    // console.log(response);
    response = response.json();
    // console.log(response);
    response.then((val)=>{console.log('Success');console.log(val)},(val)=>{console.log('Error');console.log(val);});
    //   if (response.ok) {
    //         // console.log(response.then(()=>{response.json()}));
    //     // oбработка успешного входа
    //   } else {
    //     // oбработка ошибок
    //     console.log('Error');
    //     console.log(response);
    //   }
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button type="submit">Login</button>
  </form>