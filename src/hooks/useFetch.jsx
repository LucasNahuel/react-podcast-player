import {useState, useEffect} from 'react';


const  useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchData(){
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Ha ocurrido un error procesando la respuesta');
                }
    
                const result = await response.json();
                setData(result);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
        
    }, [url]);

    return {data, loading, error};

};


export default useFetch;