import axios from "axios";

const enviarFecha = async (fecha) => {
    try {
      const response = await axios.post('http://url../api/calendarios', { fecha: fecha });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
