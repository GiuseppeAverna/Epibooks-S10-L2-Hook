import {useState,useEffect} from "react"
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = () => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }

  const [comments,setComments] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [isError, setisError] = useState(false)

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       isLoading: true,
  //     })
  //     try {
  //       let response = await fetch(
  //         'https://striveschool-api.herokuapp.com/api/comments/' +
  //           this.props.asin,
  //         {
  //           headers: {
  //             Authorization: 'Bearer inserisci-qui-il-tuo-token',
  //           },
  //         }
  //       )
          useEffect(()=>{
            async () => {
              if (asin !== asin) {
                setisLoading({
                  isLoading: true,
                })
                try {
                  let response = await fetch(
                    'https://striveschool-api.herokuapp.com/api/comments/' +
                      asin,
                    {
                      headers: {
                        Authorization: 'Bearer inserisci-qui-il-tuo-token',
                      },
                    }
                  )
          })


        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments({
            comments: comments,
            isLoading: false,
            isError: false,
          })
        } else {
          setisLoading({ isLoading: false, isError: true })
        }
      } catch (error) {
        console.log(error)
        setisError({ isLoading: false, isError: true })
      }
    }
  }

  
    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  
}

export default CommentArea
