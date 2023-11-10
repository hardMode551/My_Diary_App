const { body, validationResult } = require('express-validator');

const postValidationRules = () => {
  return [
    body('title')
      .notEmpty()
      .withMessage('Заголовок не должен быть пустым')
      .isLength({ max: 200 })
      .withMessage('Заголовок не должен превышать 200 символов'),
    body('content')
      .notEmpty()
      .withMessage('Заметка не должна быть пустой')
      .isLength({ max: 2000 })
      .withMessage('Текст записи не должен превышать 2000 символов'),
    body('date')
      .notEmpty()
      .withMessage('Дата не должна быть пустой')
      .matches(/^\d{2}\.\d{2}\.\d{2}$/)
      .withMessage('Некорректный формат даты (дд.мм.гг)'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};

module.exports = { postValidationRules, validate };
