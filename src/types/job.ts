export type job = {
  id: string;
  attributes: attributtes;
};

type attributtes = {
  slug: string;
  departamento: string;
  cargo: string;
};

export type jobAll = {
  id: string;
  attributes: attributesAll;
};
interface attributesAll extends attributtes {
  tituloContenido: Array<tituloContenido>;
  sep: seo;
}

type tituloContenido = {
  id: string;
  titulo: string;
  contenido: string;
};
type seo = {
  id: string;
  descripcion: string;
  titulos: string;
  imagen: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};
