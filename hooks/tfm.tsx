import axios from 'axios';

const getTfmPrice = async (token0: string, token1: string, amount: number) => {
  const response = await axios.get(
    `https://osmosis-api.tfm.dev/route?token0=${token0}&token1=${token1}&amount=${amount}`
  );
  const jsonString: string = response.data.return_value;
  return jsonString
};

export const fetchOsmoPrice = getTfmPrice('uosmo', 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858', 1000000).then((value) => {
  const str: string = value;
  return str
})
