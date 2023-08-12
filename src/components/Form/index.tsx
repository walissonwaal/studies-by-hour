import React from 'react'
import Button from './../Button/index';
import style from './Form.module.scss'

class Form extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    console.log('state: ', this.state)
  }
  render() {
    return (
      <form className={style.newTask} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          {/* HtmlFor: focar no input tarefa quando o label for cslicado */}
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input type="text" name='tarefa' value={this.state.tarefa} onChange={e => this.setState({...this.state, tarefa: e.target.value})} id='tarefa' placeholder='O que você quer estudar' required />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input type="time" step="1" name='tempo' value={this.state.tempo} onChange={e => this.setState({ ...this.state, tempo: e.target.value })} id='tempo' min='00:00:00' max="01:30:00" required />
        </div>
        <Button type='submit'>Adicionar</Button>
      </form>
    )
  }
}

export default Form