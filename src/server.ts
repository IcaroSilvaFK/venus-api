import 'dotenv/config';
import { app } from './main';

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `🚀server running at port http://localhos:${process.env.PORT || PORT}`,
  );
});
