import { categories } from "../Category";
import { useState } from "react";
import { Container } from "./style.js";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  function valideUrl(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.lenght < 43) {
      setErrors("URL inválida.");
      return false;
    } else {
      return url.substring(32, 43); //id do video
    }
  }

  function onSave(e) {
    e.preventDefault();
    console.log(url, category);

    //validar category
    if (!category || category === "-") {
      setErrors("Escolha uma categoria.");
      return;
    } else {
      setErrors("");
    }

    //validar url
    const urlvideo = valideUrl(url);
    if (urlvideo && category) {
      // Guardar a url e a category
      const newVideos = { url, category };
      setVideos([...videos, newVideos]);
      localStorage.setItem("videos", JSON.stringify([...videos, newVideos]));
      //limpar o form
      setUrl("");
      setCategory("");
    } else {
      setErrors("URL inválida.");
    }
  }

  return (
    <Container>
      <h2>Cadastro de Vídeo</h2>

      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            minLength="43"
            maxLength="43"
          />
        </div>

        <div>
          <label>Categoria</label>
          <select
            required="required"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="-">Selecione uma Categoria</option>
            {categories.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>

        <div>
          <button>Cadastrar</button>
        </div>
        <div>{errors}</div>
      </form>
    </Container>
  );
}

export default Form;
