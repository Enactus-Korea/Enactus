



  export async function onPostPressed() {
    try {
      let response = await fetch('http://localhost:9000/feed',{
        method: 'POST',
        headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          username: this.props.state.userDatas.userName,
          useruniv: this.props.state.userDatas.userUniv,
          userimg: this.state.userimg,
          content: this.state.content
        })
      })
      let res = await response.text()
      return this.callbackPosting()
    } catch(errors) {
      let formErrors = JSON.parse(errors);
      console.log(formErrors)
    }
  }
