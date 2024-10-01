import { useState } from "react";
import { doc, writeBatch } from "firebase/firestore";

import { db } from "../../services/firebaseConfig";

//import items from "../../data/items.json";
import Spinner from "../../components/Spinner";

const Update = () => {
    
    let [ loading, setLoading ] = useState(false);

    const bulkinsert = async (dataArray) => {
        const batch = writeBatch(db);

        dataArray.forEach((element, index) => {
            const docRef = doc(db, 'items', `item-0${index}`);
            batch.set(docRef, element);
        });
        try {
            setLoading(true);   
            await batch.commit(); 
        } 
        catch (error){
            console.error('Error al insertar datos: ', error);
        } 
        finally {
            setLoading(false);
        }   
    }

    return (
        <main className="container">
            <h2>Haz Click para añadir los items de la colección</h2>
            <button onClick={() => bulkinsert(items)}>Añadir Items</button>
            {
                loading && (
                    <div>
                        <h3>Insertando nuevos registros</h3>
                        <Spinner />
                    </div>
                )}
        </main>
    )
}

export default Update;