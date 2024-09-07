mantenedor: Governo do Estado do Ceará
administração: Secretaria da Ciência, Tecnologia e Educação Superior 
entidade: Universidade do Trabalho Digital
curso: Desenvolvimento de Interfaces Web com Javascript
projeto: Cadastro de cliente
tecnologias utilizadas: Node.js com MySQL 
interação: API
endpoints:
  get
  	.../api/cliente/<id>
    .../api/clientes
  post
  	.../api/clientes
  put
  	.../api/cliente/<id>
  delete
  	.../api/cliente/<id>
armazenamento de informações:
  sgdb: MySQL
  banco de dados: backend
  tabela: clientes
  estrutura:
    id	      int	          
    nome	    varchar(255)	
    idade	    int	YES			
    email	    varchar(255)
    createdAt	datetime	NO			
    updatedAt	datetime	NO			
