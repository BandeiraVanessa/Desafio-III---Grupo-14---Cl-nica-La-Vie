const  Paciente  =  requer ( '../models/pacientes.model' )

const  pacientesControlador  =  {

  //Listar todos os pacientes
  async  listarPacientes ( req ,  res )  {
    tente  {
      const  listaPaciente  =  await  Paciente . encontrarTodos ( )
      res . estado ( 200 ) . json ( listaPaciente )
    }  pegar  ( erro )  {
      res . estado ( 400 ) . json ( { erro } )
    }
  } ,

  //Listar Pacientes por ID
  async  listarPacientesId ( req ,  res )  {
    tente  {
      const  { id }  =  req . parâmetros
      const  listaPaciente  =  await  Paciente . encontrarTodos ( {
        onde : {
          id : id
        }
      } )

      if  ( ! listaPaciente )  {
        res . estado ( 404 ) . json ( 'Id não encontrado. Por favor tente novamente.' )
      }  senão  {
        res . estado ( 200 ) . json ( listaPaciente )
      }
    }  pegar  ( erro )  {
      res . estado ( 404 ) . json ( { erro } )
    }
  } ,

  // Cadastrar Pacientes
  async  cadastrarPacientes ( req ,  res )  {
    tente  {
      const  { nome , email , idade }  =  req . corpo
      const  casdastraPaciente  =  await  Paciente . criar ( {
        nome ,
        e-mail ,
        idade
      } )

      if  ( ! casdastraPaciente )  {
        res
          . estado ( 400 )
          . json ( 'Houve um erro na requisição. Tente novamente.' )
      }  senão  {
        res . estado ( 201 ) . json ( `Paciente ${ nome } cadastrado com sucesso!` )
      }
    }  pegar  ( erro )  {
      res . estado ( 400 ) . json ( { erro } )
    }
  } ,

  //Atualizar Pacientes
  async  atualizarPacientes ( req ,  res )  {
    tente  {
      const  { id }  =  req . parâmetros
      const  { nome , email , idade }  =  req . corpo

      const  AtualizaPaciente  =  aguardo  Paciente . encontrarUm ( {
        onde : {
          id : id
        }
      } )

      if  ( ! AtualizaPaciente )  {
        res
          . estado ( 400 )
          . json ( 'Houve um erro na requisição. Tente novamente.' )
      }  senão  {
        aguardo  paciente . update ( { nome , email , idade } ,  {  where : { id }  } )
      }

      res
        . estado ( 200 )
        . json ( `Informações do paciente ${ nome } atualizadas com sucesso!` )
    }  pegar  ( erro )  {
      res . estado ( 400 ) . json ( { erro } )
    }
  } ,

  //Deletar Paciente
  async  deletarPacientes ( req ,  res )  {
    tente  {
      const  { id }  =  req . parâmetros
      const  deletar  =  aguardar  paciente . destruir ( {
        onde : {
          id : id
        }
      } )

      if  ( ! deletar )  {
        res . estado ( 404 ) . json ( 'Id não encontrado.' )
      }  senão  {
        res . enviarStatus ( 204 )
      }
    }  pegar  ( erro )  {
      res . estado ( 404 ) . json ( { erro } )
    }
  }
}

módulo . exports  =  pacientesController