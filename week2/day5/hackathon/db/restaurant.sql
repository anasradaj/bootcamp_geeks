PGDMP       :                }        
   Restaurant    17.4    17.4 #    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    17181 
   Restaurant    DATABASE        CREATE DATABASE "Restaurant" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
    DROP DATABASE "Restaurant";
                     postgres    false            �            1259    17537    account_requests    TABLE     �  CREATE TABLE public.account_requests (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    requested_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    first_name character varying(50),
    last_name character varying(50),
    status character varying(20) DEFAULT 'pending'::character varying,
    decision_at timestamp without time zone
);
 $   DROP TABLE public.account_requests;
       public         heap r       postgres    false            �            1259    17536    account_requests_id_seq    SEQUENCE     �   CREATE SEQUENCE public.account_requests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.account_requests_id_seq;
       public               postgres    false    222            �           0    0    account_requests_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.account_requests_id_seq OWNED BY public.account_requests.id;
          public               postgres    false    221            �            1259    17551    activity_log    TABLE     �   CREATE TABLE public.activity_log (
    id integer NOT NULL,
    user_id integer,
    action character varying(255),
    details text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.activity_log;
       public         heap r       postgres    false            �            1259    17550    activity_log_id_seq    SEQUENCE     �   CREATE SEQUENCE public.activity_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.activity_log_id_seq;
       public               postgres    false    224            �           0    0    activity_log_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.activity_log_id_seq OWNED BY public.activity_log.id;
          public               postgres    false    223            �            1259    17183 
   menu_items    TABLE     �   CREATE TABLE public.menu_items (
    item_id integer NOT NULL,
    item_name character varying(30) NOT NULL,
    item_price smallint DEFAULT 0,
    photo_url character varying(255),
    category character varying(50),
    description text
);
    DROP TABLE public.menu_items;
       public         heap r       postgres    false            �            1259    17182    menu_items_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.menu_items_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.menu_items_item_id_seq;
       public               postgres    false    218            �           0    0    menu_items_item_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.menu_items_item_id_seq OWNED BY public.menu_items.item_id;
          public               postgres    false    217            �            1259    17528    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    must_change_password boolean DEFAULT false
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    17527    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    220            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    219            4           2604    17540    account_requests id    DEFAULT     z   ALTER TABLE ONLY public.account_requests ALTER COLUMN id SET DEFAULT nextval('public.account_requests_id_seq'::regclass);
 B   ALTER TABLE public.account_requests ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    222    221    222            7           2604    17554    activity_log id    DEFAULT     r   ALTER TABLE ONLY public.activity_log ALTER COLUMN id SET DEFAULT nextval('public.activity_log_id_seq'::regclass);
 >   ALTER TABLE public.activity_log ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    223    224    224            0           2604    17186    menu_items item_id    DEFAULT     x   ALTER TABLE ONLY public.menu_items ALTER COLUMN item_id SET DEFAULT nextval('public.menu_items_item_id_seq'::regclass);
 A   ALTER TABLE public.menu_items ALTER COLUMN item_id DROP DEFAULT;
       public               postgres    false    218    217    218            2           2604    17531    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            �          0    17537    account_requests 
   TABLE DATA           |   COPY public.account_requests (id, username, password, requested_at, first_name, last_name, status, decision_at) FROM stdin;
    public               postgres    false    222   �)       �          0    17551    activity_log 
   TABLE DATA           P   COPY public.activity_log (id, user_id, action, details, created_at) FROM stdin;
    public               postgres    false    224   �+       �          0    17183 
   menu_items 
   TABLE DATA           f   COPY public.menu_items (item_id, item_name, item_price, photo_url, category, description) FROM stdin;
    public               postgres    false    218   �+       �          0    17528    users 
   TABLE DATA           d   COPY public.users (id, username, password, first_name, last_name, must_change_password) FROM stdin;
    public               postgres    false    220   �,       �           0    0    account_requests_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.account_requests_id_seq', 11, true);
          public               postgres    false    221            �           0    0    activity_log_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.activity_log_id_seq', 1, false);
          public               postgres    false    223            �           0    0    menu_items_item_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.menu_items_item_id_seq', 20, true);
          public               postgres    false    217            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 10, true);
          public               postgres    false    219            @           2606    17543 &   account_requests account_requests_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.account_requests
    ADD CONSTRAINT account_requests_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.account_requests DROP CONSTRAINT account_requests_pkey;
       public                 postgres    false    222            B           2606    17545 .   account_requests account_requests_username_key 
   CONSTRAINT     m   ALTER TABLE ONLY public.account_requests
    ADD CONSTRAINT account_requests_username_key UNIQUE (username);
 X   ALTER TABLE ONLY public.account_requests DROP CONSTRAINT account_requests_username_key;
       public                 postgres    false    222            D           2606    17559    activity_log activity_log_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.activity_log
    ADD CONSTRAINT activity_log_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.activity_log DROP CONSTRAINT activity_log_pkey;
       public                 postgres    false    224            :           2606    17189    menu_items menu_items_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.menu_items
    ADD CONSTRAINT menu_items_pkey PRIMARY KEY (item_id);
 D   ALTER TABLE ONLY public.menu_items DROP CONSTRAINT menu_items_pkey;
       public                 postgres    false    218            <           2606    17533    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    220            >           2606    17535    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public                 postgres    false    220            E           2606    17560 &   activity_log activity_log_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.activity_log
    ADD CONSTRAINT activity_log_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 P   ALTER TABLE ONLY public.activity_log DROP CONSTRAINT activity_log_user_id_fkey;
       public               postgres    false    224    4668    220            �   5  x���9o�1���_�b[>�홯�h8(B�h|��DI�����-�Uد�gޱn��˖qs[o�]߭L�|�w�O�>�Ӈ�OON�����!�d��L�Y���2�NE�h���LA� ��ҫ��̬Lu2LԱ�^-��=s	���:{A
M�)�XG�7&\6��@�!�@+ʒ ,6�/���un�l���o���v�f\8H�nm�熛���~����]�{�������Z{V�-���+cX`ц��\q䤃��ڊ����GbO�@E$�A��s��i��4���GO�<�T��X'��ܶ��`˜
������/��lc���l���ٓ��W�oϞ���|�)F��h����ͭ̀�O#Ә)1\�� 0I��!J�s�F"��:�H��5zK4*;��%J�m.9+X���#��KW�E�P|q�s8���&_H$�o��|�Cjyێ��N�ݧӗ���2�F�ĸ���t�h�&�3o�U�t��#*`���ks�^����CA�h���m�Z1WO�`4��歊�?b+��Ĩ�����ŧ�橕X��;n��v���kQ      �      x������ � �      �   �   x�34�,H,)IUHN,J��K,JT�46�t-.HL/M-�,��K�e�s�����.B�-82��9A�A����4��%DL�$#?�"#�$_�������������H7���8)�8��,�Ys� T=�      �     x�e�;OA��ߑ�k{�@$ģ@T��g�J��Sr���*�La�Ō?��<\m�9�)���y���e�\��;����弒	8i�9a�.]lrn�'tE�P��rt�`VR�5!�L0P7�)[-��!�X� 
R0�Z�[ƒ�Ӗ��L���7�X������?��;��=�﷏O���}^a$�TsJ
I�6��1�*�Ir���$t��"��"١���<:�V�)%�2k�,�j�X0��x���ޫ�j�ð��ۍ���w�8�+Dh�     