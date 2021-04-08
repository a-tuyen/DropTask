-- tasks seed data
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Buy toothpase', 'the mint kind', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Toothbrush%2C_Toothpaste%2C_Dental_Care_%28571741%29_%28cropped%29.jpg/275px-Toothbrush%2C_Toothpaste%2C_Dental_Care_%28571741%29_%28cropped%29.jpg',
false, 1, 2);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Watch Shawshank Redemption', 'classic movie', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm',
false, 1, 1);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Read redwall', 'hamsters with swords?', 'https://upload.wikimedia.org/wikipedia/en/4/49/RedwallUSCover.jpg',
false, 1, 4);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Make reservation at the flying pig', 'so goood', 'https://pbs.twimg.com/profile_images/744965911816265729/y2jA2Cgi_400x400.jpg',
false, 1, 3);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Watch robo-cop', 'bizzare movie', 'https://upload.wikimedia.org/wikipedia/en/1/1a/RoboCop_%28Peter_Weller%29.png',
false, 1, 1);
INSERT INTO tasks (title, description, imageurl, completed, user_id, category_id)
VALUES ('Eat at la taqueria', 'my favorite tacos', 'https://media-cdn.tripadvisor.com/media/photo-s/17/60/51/2a/photo1jpg.jpg',
false, 1, 3);


-- categories

INSERT INTO categories (type) VALUES ('Movie');
INSERT INTO categories (type) VALUES ('Product');
INSERT INTO categories (type) VALUES ('Restaurant');
INSERT INTO categories (type) VALUES ('Book');
INSERT INTO categories (type) VALUES ('Uncategorized');
