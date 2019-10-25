import React  from 'react'
import styled from 'styled-components'

function Home(){
  return(
    <Container>
      <SHeader>

        <a className="brand" href="./">dnloamrm</a>

        <nav>
          <ul className="menu">
            <li className="menu__item"><a className="menu__link" href="#Trabalhos">Trabalhos</a>  </li>
            <li className="menu__item"><a className="menu__link" href="#Sobre">Sobre</a> </li>
            <li className="menu__item"><a className="menu__link" href="#Contato">Contato</a> </li>
          </ul>
        </nav>

      </SHeader>

      <SMain>
       <div className="hero">
       <h1 className="title">Danilo Amorim é designer digital <span className="break"> </span>
da <a href="https://softplan.com.br">Softplan</a> em Florianópolis, BR</h1>
      
      <nav> 
        <ul>
          <li><a href="#linkedin" target="_blank">linkedin</a></li>
          <li><a href="#medium" target="_blank">medium</a></li>
          <li><a href="#behance" target="_blank">behance</a></li>
        </ul> 
            <a className="email__link" href="mailto:contato@daniloamorim.com">contato@daniloamorim.com</a> 
      </nav>

       </div>
      
 
      </SMain>


    </Container>
  )
}


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
    max-width: 100%;

    


    @media only screen and (min-width: 425px) and (max-width: 900px) {
         margin: 0 20px;
      }



`

const SHeader = styled.header` 
 color: #fff;
display: flex;
padding: 50px 20px 0;


 @media only screen and (max-width: 900px) {
        flex-direction: column;
      }

.brand{
  color: #fff;
  text-decoration:none;
   font-weight:600; 
      font-size: 30px;
     margin-bottom: 20px;

   @media only screen and (min-width: 900px) {
        margin-right: auto;
          font-size: 20px; 
               margin-bottom: 0;

      }
}

nav{ 
  .menu{ 
    font-size: 20px;
    font-weight: 400;
    list-style: none;
    display: inline-flex; 
        padding: 0;
    margin: 0; 

         @media only screen and (max-width: 320px) {
           font-size: 18px ; 
         }

         


    &:hover li a { opacity: 0.7}

    li{ padding-right: 30px;}
    li a{ 
      transition: all 0.2s linear;
       color: #fff; 
      text-decoration: none;
      &:hover{ opacity: 1}
    }
  }
 
}
`

const SMain = styled.main`
 
padding: 20px;
display: flex;
    flex: 1;

    .hero{
      display: flex;
      align-self:center;
      flex-direction: column;
          width: 100%;
      .title{ 
        color: #fff; 
        font-size: 52px ; 
        font-weight:600;
        margin-bottom: 70px;

        @media only screen and (min-width: 320px) {
           font-size: 40px ; 
         }

         @media only screen and (min-width: 900px) {
           font-size: 52px ; 
         }

              @media only screen and (min-width: 900px) {
                .break{
                  background: red;
                  display: block; 
                      }
                }
        a{ color: #fff}

      }

     nav{
            display: flex; 


    @media only screen and (max-width: 900px) {
        flex-direction: column;
      }
       



    ul{
          list-style: none;
        padding: 0;
        margin: 0 35px 0 0;
        display: inline-flex; 
        
        &:hover li a,
        &:hover li::after{ opacity: 0.3}

        li{  
          font-size:20px; 
          font-weight:500;
          color: #fff; 

           @media only screen and (max-width: 320px) {
            font-size: 16px ; 
          }

          &:not(:last-child):after{
             padding: 0 10px;
            content:"-";
          }
           
          a{ 
            color: #fff; 
            text-decoration: none; 
            border-bottom: 6px solid transparent;
            transition: all 0.2s linear;
            &:hover{
              border-color: #fff;
              opacity: 1;
            }
          }
        }
    }

    .email__link{
        color: #808080;
        font-size:20px; 
         @media only screen and (max-width: 320px) {
            font-size: 16px ; 
          }

          @media only screen and (max-width: 900px) {
            margin-top: 10px 
          }

          font-weight:500;
        }
     }
    }


`

 

export default Home