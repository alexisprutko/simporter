import React, { Component } from 'react';


class Uploader extends Component {

  
  handleUploadFile = (event) => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('name', 'some value user types')
    data.append('description', 'some value user types')
    console.log(data)
    // axios.post('/files', data).then((response) => {
    //   this.setState({
    //     imageUrl: response.data.fileUrl
    //   })
    // })
  }
    
  render() {
    return(
      <div>
      
        <div>
          <input type="file" onChange={this.handleUploadFile} />
        </div>  
      </div>
    )
  }
}

export default Uploader
