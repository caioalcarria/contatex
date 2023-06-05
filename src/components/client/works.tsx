import { useEffect, useState } from "react"
import { WorksStyle } from "./style"
import { WorkItem } from "./workItem"

interface IProject {
  id: number;
  photo: string,
  email: string,
  phone: string,
  name: string,
  createdAt: string,
}

export const Works = () => {
  const [products, setProducts] = useState<IProject[]>([]);

  useEffect(() => {
    fetch('https://tense-earmuffs-lamb.cyclic.app/clients')
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const deltaX = 50; // Quantidade de pixels para rolar horizontalmente
    const element = event.currentTarget as HTMLDivElement;

    if (event.key === 'ArrowLeft') {
      element.scrollLeft -= deltaX; // Rolar para a esquerda
    } else if (event.key === 'ArrowRight') {
      element.scrollLeft += deltaX; // Rolar para a direita
    }
  };

  let isDragging = false;
  let startX = 0;

  const handleMouseDown = (event: React.MouseEvent) => {
    const element = event.currentTarget as HTMLDivElement;
    startX = event.clientX;
    isDragging = true;

    element.style.cursor = 'grabbing';
  };

  const handleMouseUp = (event: React.MouseEvent) => {
    const element = event.currentTarget as HTMLDivElement;
    isDragging = false;

    element.style.cursor = 'grab';
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const deltaX = event.clientX - startX;

    if (isDragging) {
      const element = event.currentTarget as HTMLDivElement;
      element.scrollLeft -= deltaX; // Rolar horizontalmente com o mouse
      startX = event.clientX;
    }
  };

  return (
    <WorksStyle>
      <div className="containerx grid" onKeyDown={handleKeyDown} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} tabIndex={0}>
        {
          products.length ? (
            products.map((item) => {
              return <WorkItem key={item.id} item={item} />
            })
          ) : (
            <p>Desculpe 😢, ainda estou estudando essa categoria.</p>
          )
        }
      </div>
    </WorksStyle>
  )
}