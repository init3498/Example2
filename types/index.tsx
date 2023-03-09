export interface IAuction {
  id: number;
  attributes: IAuctionAttribute;
}
export interface IAuctionAttribute {
  Numero: number;
  Nom: string;
  Categorie: string;
  Online: boolean;
  Debut: string;
  Cloture: string;
  Description: string;
  locale: string;
  Illustration: IImageData;
  URL: string;
  PDF: IPDFData;
}
export interface ISpecialties {
  id: number;
  attributes: ISpecialtiesAttribute;
}
export interface ISpecialtiesAttribute {
  Numero: string;
  Categorie: string;
  Description: string;
  locale: string;
  Slug: string;
  Illustration: IImageData;
  resultats: IResults[];
}

export interface IFilter {
  id: number;
  attributes: IFilterAttribute;
}

export interface IFilterAttribute {
  Date: string;
}
export interface IResults {
  id: number;
  attributes: IResultsAttribute;
}

export interface IResultsAttribute {
  Categorie: string;
  Description: string;
  Slug: string;
  locale: string;
  resultats: IDataResult;
}

export interface IDataResult {
  data: IData[];
}

export interface IData {
  attributes: {
    Artiste: string;
    Prix: string;
    Image: IImageData;
    Description: string;
    Dimensions: string;
    Titre: string;
  };
}
export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        medium: {
          url: string;
        };
      };
    };
  };
}

export interface IPDFData {
  data: {
    attributes: {
      url: string;
    };
  };
}
export interface FormData {
  [key: string]: Data;
}

export interface IAuction {
  id: number;
  attributes: IAuctionAttribute;
}

export interface Data {
  [key: string]: Field | FileInput | RadioB | Toggle;
}

export interface Field {
  value: string | number;
  required?: boolean;
  type: "input";
  placeholder: string;
  mail?: boolean;
}

export interface Toggle {
  value: boolean;
  toggle?: boolean;
  type: "toggle";
  text: string;
}

export interface FileInput {
  value: Array<File>;
  required?: boolean;
  type: "file";
  file: boolean;
  placeholder?: string;
  allowedTypes: Array<string>;
  maxFileSize: number;
}

export interface RadioB {
  id: { [key: string]: string };
  value: string;
  required?: boolean;
  type: "radio";
  text?: string;
  choices: { [key: string]: string };
}

export interface radioButton {
  label: string;
  error?: string;
  value: string;
  name: string;
  id: string;
  defaultChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
