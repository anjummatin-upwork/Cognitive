import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

import Table  from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'

class HomePage extends Component{
constructor(props){
  super(props);
    this.state = {
      fileName: '',
      fileContent: '',
      list: [],
      dict: [],
      genoTypes: [],
      commonGenoTypes : [],
      genotypeSnps: [],
      genotypeDescription: [],
      genotypeCitations: []
    };
  }
  handleFileChange = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () =>{
      this.setState({fileName: file.name, fileContent: reader.result});
      this.state.list = this.state.fileContent.toString().replace( /\n/g, " " ).replace(/^.*#.*$/mg, "").split( " " );
      this.state.list.map(
        rnaMap =>(
          this.state.dict.push({
            key: rnaMap.split(/\s+/).slice(0,1),
            value: "("+ rnaMap.split(/\s+/).slice(3,4)+", "+rnaMap.split(/\s+/).slice(4,5)+")"
          })
        )
      )
      this.findGenoTypeDescription();
      this.forceUpdate();
    }
    reader.onerror = () =>{
      console.log('file error', reader.error)
    }
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.snps().on('value', snapshot => {
      this.setState({
        genoTypes: snapshot.val(),
        loading: false,
      });
    });
  }
  findGenoTypeDescription(){
    this.state.dict.map(
      dictMap =>(
        this.state.genoTypes.map(
           genoTypeMap =>{ 
             if(String(dictMap.key[0]).toLowerCase()  == String(genoTypeMap.SNP).toLowerCase() && dictMap.value == genoTypeMap.Alleles){ 
               this.state.genotypeDescription.push(genoTypeMap.GenotypeDescription);
               this.state.genotypeCitations.push(genoTypeMap.Citation1+genoTypeMap.Citation2+genoTypeMap.Citation3+genoTypeMap.Citation4+genoTypeMap.Citation5)
               this.state.genotypeSnps.push(dictMap.key);
              } 
            } 
        )
      )
    )
    console.log(this.state.genotypeCitations[0])
  }
  render()  {
    return  (
      <div>
        <h1>Upload your DNA file here:</h1>
        <input type="file" onChange={this.handleFileChange}></input>
        <br/>
        <h3>File Name: {this.state.fileName}</h3>
        {(this.state.genotypeDescription.length > 0) &&
        <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Genotype SNP</th>
            <th>Genotype Descriptions</th>
            <th>Citations</th>|
          </tr>
        </thead>
        <tbody>
          {this.state.genotypeDescription.map((item,index) => {
            return <tr>
                      <td>
                        {this.state.genotypeSnps[index]}
                      </td>
                      <td>
                        {item}
                      </td>
                      <td>
                        {this.state.genotypeCitations[index]}
                      </td>
                    </tr>;
          })}
        </tbody>
      </Table>
      }
      </div>
    );
  }
}

export default withFirebase(HomePage);