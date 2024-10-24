import Link from "next/link"
import styles from "../service/service.module.css"

const Servicepage = () => {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.header}>This is Service page</h1>
      <ul className= {styles.list}>
        <li><Link href="/servise/graphic_desing">This is graphic desing page</Link></li>
        <li><Link href="/service/video_editing">This is video editing page</Link></li>
      </ul>
    </div>
  )
}

export default Servicepage




