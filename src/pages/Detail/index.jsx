import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc  } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import Spinner from "../../components/Spinner";

import ItemDetail from "../../components/ItemDetail";

const Detail = () => {
  const { id } = useParams();
  let [ item, setItem ] = useState(null);
  let [ loading, setLoading ] = useState(false);
  let [ error, setError ] = useState(false);

  useEffect(() => {

    const docRef = doc(db, 'items', id);
    setLoading(true);
    
    getDoc(docRef)
      .then(snapshot => snapshot.exists()
        ? setItem({ id: snapshot.id, ...snapshot.data() })
        : setError(true)
    )
    .catch(err => {
      console.error("Error al buscar elemento: ", err);
      setError(true);
     
    })
    .finally(() => setLoading(false));

}, []);

  return (
    <main className="container">
      {loading
      ? <Spinner />
      : error
        ? <h3>No se pudo encontrar el elemento</h3>
        : <ItemDetail {...item}/>  // Pasamos los datos del item a ItemDetail para mostrarlos en la vista de detalle.  //
      }
    </main>
  )
  
  
  
}

export default Detail;