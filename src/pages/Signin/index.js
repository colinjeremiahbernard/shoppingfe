import React from "react";
import { PageArea } from './styled'
import { PageContainer, PageTitle } from '../../components/MainComponents'

const Page = () => {
  return (
    <PageContainer>
      <PageTitle> Login </PageTitle>
      <PageArea>
        <form>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--imput"></div>
                <input type='email'/>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--imput"></div>
                <input type='password'/>
          </label>
          <label className="area">
            <div className="area--title">Lembrar Senha</div>
            <div className="area--imput"></div>
                <input type='checkbox'/>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--imput"></div>
                <button> Fazer Login </button>
           </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}
export default Page