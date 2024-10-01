import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import Spinner from "../../components/Spinner";
import ItemDetail from "../../components/ItemDetail";


const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
  }, [id]);

  return (
    <main className="detail-container">
      {loading ? (
        <Spinner />
      ) : error ? (
        <h3>No se pudo encontrar el elemento</h3>
      ) : (
        <ItemDetail {...item} />
      )}
    </main>
  );
};

export default Detail;