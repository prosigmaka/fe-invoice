--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-01-21 23:32:57

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 24610)
-- Name: client_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client_data (
    id_client bigint NOT NULL,
    payment_term character varying,
    contact_person bigint,
    client_position character varying,
    order_by character varying,
    vendor_position character varying,
    acc_by character varying,
    id_vendor bigint,
    id_po character varying
);


ALTER TABLE public.client_data OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 24648)
-- Name: invoice_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoice_data (
    id_invoice character varying NOT NULL,
    invoice_date date,
    client_company character varying,
    client_address character varying,
    dev_name character varying,
    id_po character varying,
    id_item bigint,
    id_price bigint
);


ALTER TABLE public.invoice_data OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 24631)
-- Name: item_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_data (
    id_item bigint NOT NULL,
    desc_item character varying,
    qty_item bigint,
    unit_item character varying,
    time_item bigint,
    unit_price numeric(19,2),
    id_po character varying,
    id_invoice character varying
);


ALTER TABLE public.item_data OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 24603)
-- Name: po_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.po_data (
    id_po character varying NOT NULL,
    po_date date,
    due_date date,
    id_client bigint,
    id_item bigint,
    id_price bigint
);


ALTER TABLE public.po_data OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 24624)
-- Name: price_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.price_data (
    id_price bigint NOT NULL,
    amount_price numeric(19,2),
    total_price numeric(19,2),
    ppn_item numeric(19,2),
    pph_item numeric(19,2),
    grand_total numeric(19,2),
    id_po character varying,
    id_invoice character varying
);


ALTER TABLE public.price_data OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24596)
-- Name: vendor_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vendor_data (
    id_vendor bigint NOT NULL,
    vendor_name character varying,
    vendor_address character varying,
    fob character varying,
    ship character varying,
    via character varying,
    reference character varying,
    id_client bigint
);


ALTER TABLE public.vendor_data OWNER TO postgres;

--
-- TOC entry 3348 (class 0 OID 24610)
-- Dependencies: 211
-- Data for Name: client_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.client_data (id_client, payment_term, contact_person, client_position, order_by, vendor_position, acc_by, id_vendor, id_po) FROM stdin;
\.


--
-- TOC entry 3351 (class 0 OID 24648)
-- Dependencies: 214
-- Data for Name: invoice_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invoice_data (id_invoice, invoice_date, client_company, client_address, dev_name, id_po, id_item, id_price) FROM stdin;
\.


--
-- TOC entry 3350 (class 0 OID 24631)
-- Dependencies: 213
-- Data for Name: item_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_data (id_item, desc_item, qty_item, unit_item, time_item, unit_price, id_po, id_invoice) FROM stdin;
\.


--
-- TOC entry 3347 (class 0 OID 24603)
-- Dependencies: 210
-- Data for Name: po_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.po_data (id_po, po_date, due_date, id_client, id_item, id_price) FROM stdin;
\.


--
-- TOC entry 3349 (class 0 OID 24624)
-- Dependencies: 212
-- Data for Name: price_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.price_data (id_price, amount_price, total_price, ppn_item, pph_item, grand_total, id_po, id_invoice) FROM stdin;
\.


--
-- TOC entry 3346 (class 0 OID 24596)
-- Dependencies: 209
-- Data for Name: vendor_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vendor_data (id_vendor, vendor_name, vendor_address, fob, ship, via, reference, id_client) FROM stdin;
\.


--
-- TOC entry 3188 (class 2606 OID 24616)
-- Name: client_data client_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client_data
    ADD CONSTRAINT client_data_pkey PRIMARY KEY (id_client);


--
-- TOC entry 3194 (class 2606 OID 24654)
-- Name: invoice_data invoice_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_data
    ADD CONSTRAINT invoice_data_pkey PRIMARY KEY (id_invoice);


--
-- TOC entry 3192 (class 2606 OID 24637)
-- Name: item_data item_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_data
    ADD CONSTRAINT item_data_pkey PRIMARY KEY (id_item);


--
-- TOC entry 3186 (class 2606 OID 24609)
-- Name: po_data po_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.po_data
    ADD CONSTRAINT po_data_pkey PRIMARY KEY (id_po);


--
-- TOC entry 3190 (class 2606 OID 24630)
-- Name: price_data price_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_data
    ADD CONSTRAINT price_data_pkey PRIMARY KEY (id_price);


--
-- TOC entry 3184 (class 2606 OID 24602)
-- Name: vendor_data vendor_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendor_data
    ADD CONSTRAINT vendor_data_pkey PRIMARY KEY (id_vendor);


--
-- TOC entry 3199 (class 2606 OID 24638)
-- Name: client_data id_vendor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client_data
    ADD CONSTRAINT id_vendor FOREIGN KEY (id_vendor) REFERENCES public.vendor_data(id_vendor) NOT VALID;


--
-- TOC entry 3204 (class 2606 OID 24660)
-- Name: invoice_data invoice_data_id_item_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_data
    ADD CONSTRAINT invoice_data_id_item_fkey FOREIGN KEY (id_item) REFERENCES public.item_data(id_item) NOT VALID;


--
-- TOC entry 3205 (class 2606 OID 24665)
-- Name: invoice_data invoice_data_id_po_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_data
    ADD CONSTRAINT invoice_data_id_po_fkey FOREIGN KEY (id_po) REFERENCES public.po_data(id_po) NOT VALID;


--
-- TOC entry 3206 (class 2606 OID 24670)
-- Name: invoice_data invoice_data_id_price_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoice_data
    ADD CONSTRAINT invoice_data_id_price_fkey FOREIGN KEY (id_price) REFERENCES public.price_data(id_price) NOT VALID;


--
-- TOC entry 3203 (class 2606 OID 24655)
-- Name: item_data item_data_id_invoice_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_data
    ADD CONSTRAINT item_data_id_invoice_fkey FOREIGN KEY (id_invoice) REFERENCES public.invoice_data(id_invoice) NOT VALID;


--
-- TOC entry 3202 (class 2606 OID 24643)
-- Name: item_data item_data_id_po_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_data
    ADD CONSTRAINT item_data_id_po_fkey FOREIGN KEY (id_po) REFERENCES public.po_data(id_po) NOT VALID;


--
-- TOC entry 3197 (class 2606 OID 24680)
-- Name: po_data po_data_id_client_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.po_data
    ADD CONSTRAINT po_data_id_client_fkey FOREIGN KEY (id_client) REFERENCES public.client_data(id_client) NOT VALID;


--
-- TOC entry 3196 (class 2606 OID 24675)
-- Name: po_data po_data_id_item_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.po_data
    ADD CONSTRAINT po_data_id_item_fkey FOREIGN KEY (id_item) REFERENCES public.item_data(id_item) NOT VALID;


--
-- TOC entry 3198 (class 2606 OID 24685)
-- Name: po_data po_data_id_price_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.po_data
    ADD CONSTRAINT po_data_id_price_fkey FOREIGN KEY (id_price) REFERENCES public.price_data(id_price) NOT VALID;


--
-- TOC entry 3201 (class 2606 OID 24695)
-- Name: price_data price_data_id_invoice_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_data
    ADD CONSTRAINT price_data_id_invoice_fkey FOREIGN KEY (id_invoice) REFERENCES public.invoice_data(id_invoice) NOT VALID;


--
-- TOC entry 3200 (class 2606 OID 24690)
-- Name: price_data price_data_id_po_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.price_data
    ADD CONSTRAINT price_data_id_po_fkey FOREIGN KEY (id_po) REFERENCES public.po_data(id_po) NOT VALID;


--
-- TOC entry 3195 (class 2606 OID 24700)
-- Name: vendor_data vendor_data_id_client_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vendor_data
    ADD CONSTRAINT vendor_data_id_client_fkey FOREIGN KEY (id_client) REFERENCES public.client_data(id_client) NOT VALID;


-- Completed on 2022-01-21 23:32:57

--
-- PostgreSQL database dump complete
--

