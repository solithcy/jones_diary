DROP TABLE IF EXISTS entries;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE entries(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    uid INT NOT NULL,
    content TEXT NOT NULL,
    category TEXT,
    created TIMESTAMP NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (uid) REFERENCES users(id)
);

-- default user, password: password
INSERT INTO users(username, password) VALUES('default', '$2a$10$xOpDUxQAoVz40Hdq6R4yqOpk34nPOtWT46ohUpQEgBbxY/eT.Yf8O');
INSERT INTO entries(uid, content, category, created) VALUES(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque dictum turpis, eu porttitor ipsum dapibus sed. Nullam enim nisi, fringilla sit amet arcu a, scelerisque vulputate nisi. Praesent laoreet sagittis odio at commodo. Donec volutpat vestibulum venenatis. Nunc semper in augue id dictum. Aenean nec consectetur elit, ac tincidunt nibh. Suspendisse erat magna, sagittis eu tempus finibus, pulvinar et nulla. Ut facilisis enim id sem blandit, vitae finibus nunc interdum. Phasellus posuere elit ligula, quis eleifend sem accumsan sit amet. Donec placerat venenatis erat id interdum. Nulla a cursus sapien, nec auctor augue. Integer bibendum et velit eget vulputate. Vestibulum id lectus dictum, interdum ex at, fermentum erat. Nunc sed diam eu risus maximus efficitur sit amet sed tortor. Fusce ullamcorper eleifend ipsum, vel consequat odio finibus ac. Aenean eu ligula eget sem bibendum iaculis tristique vitae neque.', 'lorem', '2025-07-10 13:25:00');
INSERT INTO entries(uid, content, category, created) VALUES(1, 'Suspendisse dignissim quam eu molestie volutpat. Morbi a lobortis tellus. Nam mollis ultrices neque et euismod. Vivamus eleifend sem eget dapibus pharetra. Vivamus ultricies purus feugiat leo finibus, pretium tempus purus sodales. Praesent eu nisi id nulla ultrices condimentum sed ac quam. Duis faucibus neque id metus placerat, nec cursus ex hendrerit.', 'lorem', '2025-07-10 13:25:00');
INSERT INTO entries(uid, content, category, created) VALUES(1, 'Morbi sodales dui vel urna sagittis maximus vel sit amet augue. Morbi ornare est quam, at iaculis est fermentum porta. Nulla orci ipsum, molestie quis urna ac, tempus faucibus neque. Curabitur imperdiet dignissim risus a luctus. Phasellus rhoncus consectetur justo, non dignissim ipsum mattis et. Donec arcu erat, rhoncus sit amet orci sollicitudin, aliquam pulvinar risus. Quisque risus nisi, laoreet vel euismod ac, lobortis sit amet ipsum.', 'secret', '2025-07-12 13:25:00');
INSERT INTO entries(uid, content, category, created) VALUES(1, 'Integer dictum magna diam, ut pulvinar urna vulputate suscipit. Etiam nisi ex, aliquam nec finibus eget, auctor quis dui. Praesent et odio libero. Quisque eget neque varius, porttitor ligula at, tempus urna. Nam convallis tempus ante, ac facilisis nisl efficitur sit amet. Nunc interdum eros sed diam eleifend, in imperdiet sem dictum. In eu tellus quis eros lobortis dictum. Curabitur eleifend congue dui ac suscipit. Nullam nulla enim, fringilla quis molestie nec, ornare ullamcorper magna. Nunc magna urna, tempus quis metus at, suscipit semper turpis. Maecenas congue ipsum eu efficitur elementum. Nam efficitur fringilla tellus, sit amet dictum nisi convallis a. Suspendisse potenti. Morbi sit amet maximus lectus. Nam vestibulum euismod ligula porta scelerisque. Quisque pretium nisi sed varius sagittis.', 'lorem', '2025-07-13 13:25:00');
INSERT INTO entries(uid, content, category, created) VALUES(1, 'Morbi justo felis, auctor id finibus eu, luctus eget lacus. Morbi vitae dictum tellus. Vivamus sit amet eleifend est. Donec elementum non metus at ultrices. Proin at ullamcorper mi, et cursus elit. Donec hendrerit, elit quis finibus porttitor, odio mauris gravida nisi, et consectetur ex tortor eu velit. Maecenas quis sollicitudin neque, at commodo tellus. Maecenas non tellus vel ligula cursus efficitur id eget enim. Sed ornare pellentesque libero, vitae feugiat purus. Aenean in porttitor mauris. Sed viverra turpis ut libero interdum sollicitudin. Aliquam dolor dui, vehicula egestas lorem non, feugiat fringilla tortor. Etiam ac nunc aliquam, maximus felis eget, varius tortor. Mauris faucibus pharetra nisl, eget eleifend nulla dictum eget. Phasellus et lorem ut dolor vestibulum condimentum a eget leo.', 'secret', '2025-07-17 13:25:00');
INSERT INTO entries(uid, content, category, created) VALUES(1, 'Etiam accumsan, enim et mattis suscipit, lorem lorem tempor nunc, nec aliquam dolor nisi in massa. Suspendisse auctor sagittis quam. Sed sed varius risus. Donec efficitur consectetur lorem. Pellentesque non nisi mi. Phasellus quis ipsum orci. Aenean egestas nulla sed rutrum venenatis. Maecenas tempor accumsan justo, id tempor purus aliquam ut.', '', '2025-07-17 13:25:00');
INSERT INTO entries(uid, content, category, created) VALUES(1, 'Fusce ac sem massa. Duis cursus mollis augue in faucibus. Vivamus vitae tortor aliquam, iaculis nulla pharetra, ultricies neque. Maecenas non finibus sapien. Cras placerat non mauris quis rutrum. Ut at neque vestibulum, dapibus lacus quis, euismod est. Curabitur vulputate vel justo id finibus.', '', '2025-07-17 13:27:00');
