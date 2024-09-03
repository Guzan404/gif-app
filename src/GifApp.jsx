import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";


export default function GifApp() {

  const [categories, setCategories] = useState(['Anime'])
  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h3>GIFAPP </h3>

      <AddCategory onNewCategory={onAddCategory} />

      {
        categories.map((category) => (
          <GifGrid key={category} category={category}/>
        ))

      }

    </>
  )
}
