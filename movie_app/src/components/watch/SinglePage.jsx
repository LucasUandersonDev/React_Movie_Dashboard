import React, { useState, useEffect } from "react"
import "./style.css"
import { useParams } from "react-router-dom"
import { homeData, recommended } from "../../dummyData"
import Upcomming from "../upcoming/Upcomming"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  const [rec, setRec] = useState(recommended)

  return (
    <>
      {item ? (
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className='container'>
              <video src={item.video} controls></video>
              <div className='para'>
                <h3>Date : {item.date}</h3>
                <p>{item.desc}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam aliquid, quasi non maiores consequuntur quos illum necessitatibus voluptas magnam et dignissimos velit impedit tempore eum nemo consectetur esse culpa?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aspernatur deleniti corporis nihil dolorem at tenetur fugit eius. Blanditiis repellat voluptatum tenetur maiores, fugit unde eaque voluptas ea dolor sequi.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci error ad voluptates odit doloremque deleniti, suscipit incidunt pariatur nostrum officiis! Unde, temporibus asperiores. Aspernatur eius velit explicabo hic consequatur.</p>
              </div>
              <div className='soical'>
                <h3>Share : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
              </div>
            </div>
          </section>
          <Upcomming items={rec} title='Recommended Movies' />
        </>
      ) : (
        "no"
      )}
    </>
  )
}

export default SinglePage
