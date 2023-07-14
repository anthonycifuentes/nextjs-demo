
const page = async () => {

    const response = await fetch(
        "http://worldtimeapi.org/api/timezone/America/Guatemala"
      ).then((response) => response.json());
      
      let time = new Date(response.datetime).toString();
      time = time.split(" ")[4];

  return (
    <div style={{"font-size": "32px"}}>Last time updated: {time}</div>
  )
}

export default page


