export type event = {
  id: string;
  attributes: attributtes;
};

type attributtes = {
  titulo: string;
  hastag: string;
  descripcion: string;
  url: string;
  imagen: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};
