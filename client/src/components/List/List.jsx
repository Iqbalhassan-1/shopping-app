import React from 'react'
import Card from '../Card/Card';
import './List.scss'

const List = () => {
    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          img2: "",
          title: "Long T-shirt",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/5432532/pexels-photo-5432532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          img2: "https://images.pexels.com/photos/6311314/pexels-photo-6311314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Coat",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          img2: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Short T-shirt",
          isNew: false,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/6311506/pexels-photo-6311506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          img2: "https://images.pexels.com/photos/6311551/pexels-photo-6311551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Long T-shirt",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
      ];
  return (
    <div className='list'>{data?.map((item)=>(
        <Card item={item} key={item.id}/>
         
    ))}</div>
  )
}

export default List;