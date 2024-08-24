import { Link } from "react-router-dom";

const Producto = () => {
  // TODO: Hacer Responsive.
  // TODO: Hacer dinamico.
  return (
    <div className="flex w-full flex-col gap-4 text-pretty">
      <section className="flex flex-col-reverse items-center gap-2">
        <div className="w-full">
          <ul className="flex items-center justify-between">
            <li className="flex aspect-square items-center justify-center overflow-hidden rounded">
              <img
                src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
                alt="apple"
                className="w-16"
              />
            </li>
            <li className="flex aspect-square items-center justify-center overflow-hidden rounded">
              <img
                src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
                alt="apple"
                className="w-16"
              />
            </li>
            <li className="flex aspect-square items-center justify-center overflow-hidden rounded">
              <img
                src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
                alt="apple"
                className="w-16"
              />
            </li>
            <li className="flex aspect-square items-center justify-center overflow-hidden rounded">
              <img
                src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
                alt="apple"
                className="w-16"
              />
            </li>
          </ul>
        </div>
        <div className="flex overflow-hidden rounded">
          <img
            src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
            alt="apple"
            className="w-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="px-2">
            <div>
              <h3 className="text-lg font-semibold">DINAR PAF-100</h3>
            </div>
            <ul className="flex list-disc flex-col gap-2 p-2 pl-8 text-sm">
              <li>Generador de rayos x de alta frecuencia 35KHz</li>
              <li>Tubo de ánodo giratorio</li>
              <li>Potencia máxima 11KW</li>
              <li>Peso del cabezal 24,5Kg</li>
              <li>220V 50/60Hz</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              className="w-full rounded border border-solid border-indigo-900 bg-indigo-900 p-4 font-semibold text-white hover:bg-white hover:text-indigo-900"
              type="button"
            >
              Más información
            </button>
            <button
              className="w-full rounded border border-solid border-indigo-900 bg-indigo-900 p-4 font-semibold text-white hover:bg-white hover:text-indigo-900"
              type="button"
            >
              Hacer pedido
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-2">
          <div>
            <h3 className="font-semibold">Más productos de esta categoría</h3>
          </div>
          <ul className="flex items-center justify-between gap-2">
            <li>
              <Link to="" className="flex flex-col items-center gap-1">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded">
                  <img
                    src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
                    alt="apple"
                    className="w-16"
                  />
                </div>
                <h4 className="text-center text-xs font-semibold">
                  Nombre Producto
                </h4>
              </Link>
            </li>
            <li>
              <Link to="" className="flex flex-col items-center gap-1">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded">
                  <img
                    src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
                    alt="apple"
                    className="w-16"
                  />
                </div>
                <h4 className="text-center text-xs font-semibold">
                  Nombre Producto
                </h4>
              </Link>
            </li>
            <li>
              <Link to="" className="flex flex-col items-center gap-1">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded">
                  <img
                    src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
                    alt="apple"
                    className="w-16"
                  />
                </div>
                <h4 className="text-center text-xs font-semibold">
                  Nombre Producto
                </h4>
              </Link>
            </li>
            <li>
              <Link to="" className="flex flex-col items-center gap-1">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded">
                  <img
                    src="https://media.wired.com/photos/648ccd0b57ff6ec62db8a7dc/2:3/w_1065,h_1598,c_limit/whiteapple_redbackground_biz_GettyImages-740523449.jpg"
                    alt="apple"
                    className="w-16"
                  />
                </div>
                <h4 className="text-center text-xs font-semibold">
                  Nombre Producto
                </h4>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Producto;
