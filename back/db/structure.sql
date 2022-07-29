CREATE TABLE super_hero (
  id                    BIGSERIAL   NOT NULL                      PRIMARY KEY,
  nickname              VARCHAR     NOT NULL                      DEFAULT '',
  real_name             VARCHAR     NOT NULL                      DEFAULT '',
  origin_description    VARCHAR     NOT NULL                      DEFAULT '',
  superpowers           VARCHAR     NOT NULL                      DEFAULT '',
  catch_phrase          VARCHAR     NOT NULL                      DEFAULT ''
);

CREATE TABLE hero_img (
  id                    BIGSERIAL   NOT NULL                      PRIMARY KEY,
  hero_id               BIGINT      REFERENCES super_hero (id), 
  name                  VARCHAR     NOT NULL                      DEFAULT ''
);