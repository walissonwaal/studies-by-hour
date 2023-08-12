import Button from "../Button";
import Clock from "./Clock";
import style from './Stopwatch.module.scss'

export default function Stopwatch() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  )
}