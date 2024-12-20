import React, {use} from "react";

export default class UserClass extends React.Component {
  //constructor call first
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    console.log(this.props.name + "==Constructor- 1 call");
  }
  // componentDidMount call third
  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/${this.props.name}`);
    const json = await data.json();
    this.setState({user: json});
    console.log(this.props.name + "--ComponentDidMount-- 3 call");
  }
  //   shouldComponentUpdate() {
  //     console.log(this.props.name + "ShouldComponentUpdate-- 4 call");
  //     return true;
  //   }
  // getSnapshotBeforeUpdate call fourth
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(this.props.name + "=getSnapshotBeforeUpdate-- 6 call");
    return null;
  }
  // componentDidUpdate call fifth
  componentDidUpdate(prevProps) {
    console.log(this.props.name + "ComponentDidUpdate -- 7 call");
  }
  // render function call second
  render() {
    console.log(this.props.name + "--Render 2 call then 5 call");
    const {name, location, bio, avatar_url, login} = this.state.user || {};
    return (
      <div className='user_card'>
        <div className='avatar_container'>
          <img src={avatar_url} alt='Avatar' className='avatar' />
        </div>
        <p className='user_name'>Name:-{name}</p>
        <p className='user_address'> Address:-{location}</p>
        <p className='user_bio'>Bio:-{bio}</p>
        <a href={`https://github.com/${login}`} className='user_links'>
          👨🏻‍💻 Github
        </a>
      </div>
    );
  }
}
