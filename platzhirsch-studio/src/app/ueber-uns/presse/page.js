import React from 'react'
import Presse from "@/components/Presse/pressebanner"
import PresseSecond from "@/components/Presse/presse"
import PresseArticle from "@/components/Presse/pressearticle"

const page = () => {
  return (
    <div>
      <Presse/>
      <PresseSecond/>
      <PresseArticle/>
    </div>
  )
}

export default page
