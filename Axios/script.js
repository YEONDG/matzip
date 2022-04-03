    async function dummy(){
        try{
        const res = await axios({
            method: "get", // http metshod
            url: "http://localhost:3000",
            headers: {}, // packet header
            data: {}, // packet body
        });
            console.log(res);
        } catch(err){
            console.error(err);	
    }}

    dummy();