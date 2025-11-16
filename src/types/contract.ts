export type Person = {
  fullName: string;
  birthDate?: string; // YYYY-MM-DD
  phone?: string;
  passportSeries?: string; // 4 цифры
  passportNumber?: string; // 6 цифр
  address?: string;
};

export type ProductInfo = {
  title: string; // «iPhone 15 Pro», «TV Samsung 55"»
  cashPrice: number; // цена наличными, руб.
};

export type DealTerms = {
  city: string; // г. Грозный
  contractNo: string; // № 957
  contractDate: string; // дата составления расписки
  markupRate: number; // наценка (0..1)
  downPayment: number; // аванс в руб.
  termMonths: number; // срок рассрочки (мес)
  firstDueDate: string; // дата первой оплаты YYYY-MM-DD
};

export type ScheduleRow = {
  seq: number;
  monthLabel: string;
  dueDate: string;
  amount: number;
};

export type DealDraft = {
  buyer: Person;
  guarantor?: Person; // поручитель
  seller: Person; // он же «продавец» (реквизиты вашей компании/ИП)
  product: ProductInfo;
  terms: DealTerms;
  schedule: ScheduleRow[];
  salePrice: number;
  principal: number; // salePrice - downPayment
};

export type DealListItem = {
  id: string;
  buyerName: string;
  status: string;
  amount: number;
  createdAt: string;
};
