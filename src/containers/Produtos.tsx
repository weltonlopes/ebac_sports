import Produto from '../components/Produto'
import { Produto as ProdutoType } from '../App'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { isLoading, data: produtos } = useGetProdutosQuery()
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const IdsDosFavoritos = produtos?.map((p) => p.id)

    if (IdsDosFavoritos?.includes(produto.id)) {
      return true
    } else return false
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
