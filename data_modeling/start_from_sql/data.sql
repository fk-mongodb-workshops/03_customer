CREATE TABLE `customer_account` (
  `customer_id` varchar(50) DEFAULT NULL,
  `account_number` varchar(45) NOT NULL,
  `account_type` varchar(45) DEFAULT NULL,
  `balance` int DEFAULT NULL,
  `currency` varchar(45) DEFAULT NULL,
  `branch_id` varchar(45) DEFAULT NULL,
  `opened_date` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`account_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_account` VALUES ('123456789','1234567890123456','Checking',1500,'USD','001','2015-03-25','Active'),('123456789','9876543210987654','Savings',10000,'USD','002','2015-03-25','Active');

CREATE TABLE `customer_address` (
  `customer_id` varchar(50) DEFAULT NULL,
  `street` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip_code` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_address` VALUES ('123456789','123 Elm Street','Springfield','IL','62701','USA','HOME',1),('123456789','12 Wedelia','Springfield','state','62701','INDONESIA','OFFICE',2);

CREATE TABLE `customer_credit_card` (
  `customer_id` varchar(50) DEFAULT NULL,
  `card_number` varchar(45) DEFAULT NULL,
  `card_type` varchar(45) DEFAULT NULL,
  `credit_limit` int DEFAULT NULL,
  `available_credit` int DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_credit_card` VALUES ('123456789','4111111111111111','Visa',5000,2000,'2025-12-31','Active',1);

CREATE TABLE `customer_email` (
  `customer_id` varchar(50) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_email` VALUES ('123456789','john.doe@gmail.com','PERSONAL','1'),('123456789','john.doe@example.com','WORK','2');

CREATE TABLE `customer_identification` (
  `customer_id` varchar(45) DEFAULT NULL,
  `ktp_number` varchar(45) DEFAULT NULL,
  `passport_number` varchar(45) DEFAULT NULL,
  `driver_license` varchar(45) DEFAULT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_identification` VALUES ('123456789','123-45-6789','X1234567','D1234567',1);

CREATE TABLE `customer_loan` (
  `customer_id` varchar(50) DEFAULT NULL,
  `loan_id` int NOT NULL,
  `loan_type` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `outstanding_balance` int DEFAULT NULL,
  `interest_rate` int DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`loan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_loan` VALUES ('123456789',1,'Personal',22323,2345,5,'2020-01-15','2025-01-15','Active');

CREATE TABLE `customer_phone` (
  `customer_id` varchar(50) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_phone` VALUES ('123456789','+1234567890','WORK',1),('123456789','+6588887777','PERSONAL',2);

CREATE TABLE `customer_preferences` (
  `customer_id` varchar(50) NOT NULL,
  `communication_email` int DEFAULT NULL,
  `communication_sms` int DEFAULT NULL,
  `communication_phone` int DEFAULT NULL,
  `communication_mail` int DEFAULT NULL,
  `language` varchar(45) DEFAULT NULL,
  `marketing_consent` int DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_preferences` VALUES ('123456789',1,1,1,1,'EN',0);

CREATE TABLE `customer_profile` (
  `customer_id` varchar(20) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `marital_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_profile` VALUES ('123456789','John','Doe','1990-01-01','Male','Single');

CREATE TABLE `customer_relationships` (
  `customer_id` varchar(50) NOT NULL,
  `relationship_manager_id` varchar(45) DEFAULT NULL,
  `relationship_manager_name` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_relationships` VALUES ('123456789','RM123456','Jane Smith','Customer Success',1);

CREATE TABLE `customer_risk_profile` (
  `customer_id` varchar(50) DEFAULT NULL,
  `risk_level` varchar(45) DEFAULT NULL,
  `risk_score` int DEFAULT NULL,
  `assessment_date` date DEFAULT NULL,
  `assessment_id` int NOT NULL,
  PRIMARY KEY (`assessment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_risk_profile` VALUES ('123456789','Moderate',65,'2023-07-20',1),('123456789','Low',20,'2025-02-21',2);

CREATE TABLE `customer_transaction_history` (
  `customer_id` varchar(50) DEFAULT NULL,
  `transaction_id` varchar(45) NOT NULL,
  `date` date DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `currency` varchar(45) DEFAULT NULL,
  `merchant` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `customer_transaction_history` VALUES ('123456789','T0987654321','2023-09-05','Credit',500,'USD','Payroll','Salary','Completed'),('123456789','T1234567890','2023-09-01','Debit',250,'USD','Amazon','Shopping','Completed');

